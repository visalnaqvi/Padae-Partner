"use client";

import { useId, useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

function normalizePhone(value) {
  const compact = value.trim().replace(/[\s()-]/g, "");
  if (compact.startsWith("+")) return compact;
  const digits = compact.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return compact;
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m} minutes`;
}

export default function MockTestGate({ test, onVerified }) {
  const formId = useId();
  const safeId = formId.replace(/[^a-zA-Z0-9_-]/g, "");
  const recaptchaContainerId = `mt-recaptcha-${safeId}`;

  const formRef = useRef(null);
  const recaptchaVerifierRef = useRef(null);
  const pendingLeadIdRef = useRef("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [otp, setOtp] = useState("");
  const [pendingPhone, setPendingPhone] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  function getRecaptchaVerifier() {
    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerId, {
        size: "invisible",
      });
    }
    return recaptchaVerifierRef.current;
  }

  async function resetRecaptcha() {
    try {
      if (recaptchaVerifierRef.current && typeof window !== "undefined" && window.grecaptcha) {
        const widgetId = await recaptchaVerifierRef.current.render();
        window.grecaptcha.reset(widgetId);
      }
    } catch (_) {}
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const studentName = String(formData.get("studentName") || "").trim();
    const rawMobile = String(formData.get("mobile") || "");
    const mobile = normalizePhone(rawMobile);

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const searchParams = new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      );

      let leadId = pendingLeadIdRef.current;
      if (leadId) {
        await updateDoc(doc(db, "mockTestAttempts", leadId), {
          studentName,
          mobile,
          mobileEntered: rawMobile,
          updatedAt: serverTimestamp(),
          verificationResentAt: serverTimestamp(),
        });
      } else {
        const ref = await addDoc(collection(db, "mockTestAttempts"), {
          studentName,
          mobile,
          mobileEntered: rawMobile,
          mockTestSlug: test.slug,
          mockTestTitle: test.title,
          verified: false,
          verifiedMobile: null,
          gclid: searchParams.get("gclid") || null,
          pagePath: typeof window !== "undefined" ? window.location.pathname : "",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          createdAt: serverTimestamp(),
        });
        leadId = ref.id;
        pendingLeadIdRef.current = leadId;
      }

      const result = await signInWithPhoneNumber(auth, mobile, getRecaptchaVerifier());
      setConfirmationResult(result);
      setPendingPhone(mobile);
      setOtp("");
    } catch (error) {
      await resetRecaptcha();
      setSubmitError("Could not send OTP. Please check the number and try again.");
      console.error("MockTestGate OTP request failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyOtp(event) {
    event?.preventDefault();

    if (!confirmationResult || !pendingLeadIdRef.current) {
      setSubmitError("Please request an OTP first.");
      return;
    }

    setIsVerifying(true);
    setSubmitError("");

    try {
      const credential = await confirmationResult.confirm(otp);
      const verifiedPhone = credential.user.phoneNumber || pendingPhone;
      const studentName = formRef.current
        ? String(new FormData(formRef.current).get("studentName") || "").trim()
        : "";

      await updateDoc(doc(db, "mockTestAttempts", pendingLeadIdRef.current), {
        verified: true,
        verifiedMobile: verifiedPhone,
        firebaseAuthUid: credential.user.uid,
        startedAt: serverTimestamp(),
        phoneVerifiedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      await signOut(auth);
      onVerified({ studentName, mobile: verifiedPhone });
    } catch (error) {
      setSubmitError("OTP did not match. Please try again.");
      console.error("MockTestGate OTP verify failed:", error);
    } finally {
      setIsVerifying(false);
    }
  }

  function handleEditNumber() {
    setConfirmationResult(null);
    setOtp("");
    setSubmitError("");
  }

  const waitingForOtp = Boolean(confirmationResult);

  return (
    <div className="mt-gate-page">
      <div className="mt-gate-inner">

        {/* Test info card */}
        <div className="mt-test-info-card">
          <span className="mt-info-label">Mock Test</span>
          <h1>{test.title}</h1>
          {test.description && <p>{test.description}</p>}
          <div className="mt-info-meta">
            <span className="mt-info-meta-item">
              📋 {test.questions?.length ?? 0} Questions
            </span>
            {test.duration && (
              <span className="mt-info-meta-item">
                ⏱ {formatDuration(test.duration)}
              </span>
            )}
            {test.defaultMarks && (
              <span className="mt-info-meta-item">
                ✅ +{test.defaultMarks} / ❌ -{test.defaultNegativeMarks ?? 1}
              </span>
            )}
          </div>
        </div>

        {/* Verification form */}
        <div className="mt-gate-form-card">
          <h2>Verify to Start</h2>
          <p>Enter your name and mobile number. We will send a one-time OTP to verify before the test begins.</p>

          <form
            ref={formRef}
            onSubmit={waitingForOtp ? handleVerifyOtp : handleSubmit}
          >
            <div className="mt-form-grid">
              <label className="mt-form-label" htmlFor={`${safeId}-name`}>
                Student Name
                <input
                  className="mt-form-input"
                  id={`${safeId}-name`}
                  name="studentName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  disabled={waitingForOtp}
                  suppressHydrationWarning
                />
              </label>
              <label className="mt-form-label" htmlFor={`${safeId}-mobile`}>
                Mobile Number
                <input
                  className="mt-form-input"
                  id={`${safeId}-mobile`}
                  name="mobile"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{10,15}"
                  placeholder="Enter mobile number"
                  required
                  disabled={waitingForOtp}
                  suppressHydrationWarning
                />
              </label>
            </div>

            {waitingForOtp && (
              <div className="mt-otp-row">
                <p className="mt-otp-hint">OTP sent to {pendingPhone}</p>
                <label className="mt-form-label" htmlFor={`${safeId}-otp`}>
                  Enter OTP
                  <input
                    className="mt-form-input"
                    id={`${safeId}-otp`}
                    name="otp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="[0-9]{6}"
                    placeholder="6-digit OTP"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    suppressHydrationWarning
                  />
                </label>
                <button
                  className="mt-form-btn mt-form-btn-secondary"
                  type="button"
                  onClick={handleEditNumber}
                  disabled={isVerifying}
                  suppressHydrationWarning
                >
                  Change number
                </button>
              </div>
            )}

            <div id={recaptchaContainerId} className="mt-recaptcha-container" />

            <button
              className="mt-form-btn"
              type={waitingForOtp ? "button" : "submit"}
              onClick={waitingForOtp ? handleVerifyOtp : undefined}
              disabled={isSubmitting || isVerifying}
              suppressHydrationWarning
              style={{ marginTop: waitingForOtp ? "12px" : "0" }}
            >
              {isSubmitting
                ? "Sending OTP…"
                : isVerifying
                ? "Verifying…"
                : waitingForOtp
                ? "Verify & Start Test"
                : "Send OTP"}
            </button>

            {submitError && <p className="mt-form-error">{submitError}</p>}
          </form>
        </div>

      </div>
    </div>
  );
}
