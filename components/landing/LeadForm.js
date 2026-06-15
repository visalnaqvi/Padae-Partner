"use client"
import { useId, useRef, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { auth, db, initAnalytics } from "@/lib/firebase";
import { trackLeadFormSubmit, trackNumberVerified } from "@/lib/gtag";
import { getStoredGclid } from "@/lib/gclid";
import OfferTimer from "./OfferTimer";

function normalizePhoneNumber(value) {
  const trimmedValue = value.trim();
  const compactValue = trimmedValue.replace(/[\s()-]/g, "");

  if (compactValue.startsWith("+")) {
    return compactValue;
  }

  const digitsOnly = compactValue.replace(/\D/g, "");

  if (digitsOnly.length === 10) {
    return `+91${digitsOnly}`;
  }

  if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
    return `+${digitsOnly}`;
  }

  return compactValue;
}

export default function LeadForm({
  anchorId,
  eyebrow = "Limited seats",
  title = "Book Your Seat Now",
  description = "Share your details and reserve your CUET UG preparation seat before the current batch closes.",
  cta = "Book Your Seat Now",
  compact = false,
  showOffer = true,
  onComplete,
}) {
  const formId = useId();
  const safeFormId = formId.replace(/[^a-zA-Z0-9_-]/g, "");
  const recaptchaContainerId = `lead-recaptcha-${safeFormId}`;
  const formRef = useRef(null);
  const recaptchaVerifierRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [pendingLeadId, setPendingLeadId] = useState("");
  const [pendingPhone, setPendingPhone] = useState("");

  function getRecaptchaVerifier() {
    if (!recaptchaVerifierRef.current) {
      recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerId, {
        size: "invisible",
      });
    }

    return recaptchaVerifierRef.current;
  }

  async function resetRecaptchaVerifier() {
    if (!recaptchaVerifierRef.current || typeof window === "undefined" || !window.grecaptcha) {
      return;
    }

    try {
      const widgetId = await recaptchaVerifierRef.current.render();
      window.grecaptcha.reset(widgetId);
    } catch (error) {
      console.warn("Firebase reCAPTCHA could not be reset:", error);
    }
  }

  function getLeadPayload(formData) {
    const enteredMobile = String(formData.get("mobile") || "");
    const normalizedMobile = normalizePhoneNumber(enteredMobile);

    return {
      studentName: formData.get("studentName"),
      mobile: normalizedMobile,
      mobileEntered: enteredMobile,
      class: formData.get("class"),
      targetCourse: formData.get("targetCourse"),
      // Persisted click id, so leads who navigated past the ad landing URL still
      // carry their gclid for offline conversion matching.
      gclid: getStoredGclid(),
      formTitle: title,
      formCta: cta,
      pagePath: window.location.pathname,
      pageUrl: window.location.href,
      verified: false,
      verifiedMobile: null,
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const leadPayload = getLeadPayload(formData);

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      initAnalytics().catch((error) => {
        console.warn("Firebase analytics was not initialized:", error);
      });

      let leadId = pendingLeadId;

      if (leadId) {
        await updateDoc(doc(db, "cuetUgLeads", leadId), {
          ...leadPayload,
          updatedAt: serverTimestamp(),
          verificationResentAt: serverTimestamp(),
        });
      } else {
        const leadRef = await addDoc(collection(db, "cuetUgLeads"), {
          ...leadPayload,
          createdAt: serverTimestamp(),
        });
        leadId = leadRef.id;
        setPendingLeadId(leadId);
        // Google Ads: count a conversion only on the first submit (new lead),
        // not on OTP resends which take the updateDoc branch above.
        trackLeadFormSubmit();
      }

      const result = await signInWithPhoneNumber(auth, leadPayload.mobile, getRecaptchaVerifier());

      setConfirmationResult(result);
      setPendingPhone(leadPayload.mobile);
      setOtp("");
    } catch (error) {
      await resetRecaptchaVerifier();
      setSubmitError("We could not send the OTP. Please check the number and try again.");
      console.error("Lead form OTP request failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerifyOtp(event) {
    event?.preventDefault();

    if (!confirmationResult || !pendingLeadId) {
      setSubmitError("Please request an OTP before verifying.");
      return;
    }

    setIsVerifying(true);
    setSubmitError("");

    try {
      const credential = await confirmationResult.confirm(otp);
      const verifiedPhone = credential.user.phoneNumber || pendingPhone;

      await updateDoc(doc(db, "cuetUgLeads", pendingLeadId), {
        mobile: verifiedPhone,
        verified: true,
        verifiedMobile: verifiedPhone,
        firebaseAuthUid: credential.user.uid,
        phoneVerifiedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      await signOut(auth);

      // Google Ads: count a conversion when the phone number is verified.
      trackNumberVerified();

      formRef.current?.reset();
      setOtp("");
      setConfirmationResult(null);
      setPendingLeadId("");
      setPendingPhone("");
      setSubmitted(true);

      // Run any post-verification action (e.g. open WhatsApp / dial) supplied by
      // the caller, now that the booking + verify conversions have fired.
      if (typeof onComplete === "function") {
        onComplete();
      }
    } catch (error) {
      setSubmitError("The OTP did not match. Please check it and try again.");
      console.error("Lead form OTP verification failed:", error);
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
    <form
      ref={formRef}
      id={anchorId}
      className={`lp-lead-form ${compact ? "lp-lead-form-compact" : ""}`}
      onSubmit={waitingForOtp ? handleVerifyOtp : handleSubmit}
    >
      <div className="lp-form-copy">
        {/* <span className="lp-eyebrow">{eyebrow}</span> */}
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
      </div>

      {showOffer ? <OfferTimer compact /> : null}

      <div className="lp-form-grid">
        <label htmlFor={`${formId}-name`}>
          Student Name
          <input
            id={`${formId}-name`}
            name="studentName"
            type="text"
            placeholder="Enter full name"
            required
            disabled={waitingForOtp}
            suppressHydrationWarning
          />
        </label>
        <label htmlFor={`${formId}-mobile`}>
          Mobile Number
          <input
            id={`${formId}-mobile`}
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
        <label htmlFor={`${formId}-class`}>
          Class
          <select id={`${formId}-class`} name="class" required defaultValue="" disabled={waitingForOtp} suppressHydrationWarning>
            <option value="" disabled>
              Select class
            </option>
            <option>Class 11</option>
            <option>Class 12</option>
            <option>Dropper</option>
          </select>
        </label>
        <label htmlFor={`${formId}-course`}>
          Target Course
          <select id={`${formId}-course`} name="targetCourse" required defaultValue="" disabled={waitingForOtp} suppressHydrationWarning>
            <option value="" disabled>
              Select target course
            </option>
            <option>B.A.</option>
            <option>B.Com</option>
            <option>B.Sc.</option>
            <option>BBA / Management</option>
            <option>Other CUET UG Course</option>
          </select>
        </label>
      </div>

      {waitingForOtp ? (
        <div className="lp-otp-box">
          <label htmlFor={`${formId}-otp`}>
            Enter OTP sent to {pendingPhone}
            <input
              id={`${formId}-otp`}
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]{6}"
              placeholder="6-digit OTP"
            required
            value={otp}
              onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))}
              suppressHydrationWarning
            />
          </label>
          <button className="lp-secondary-btn" type="button" onClick={handleEditNumber} disabled={isVerifying} suppressHydrationWarning>
            Change number
          </button>
        </div>
      ) : null}

      <div id={recaptchaContainerId} className="lp-recaptcha-container" />

      <button className="lp-primary-btn" type={waitingForOtp ? "button" : "submit"} onClick={waitingForOtp ? handleVerifyOtp : undefined} disabled={isSubmitting || isVerifying} suppressHydrationWarning>
        {isSubmitting ? "Sending OTP..." : isVerifying ? "Verifying..." : waitingForOtp ? "Verify OTP" : cta}
      </button>
      {/* <p className="lp-form-note">No spam. A counselor will contact you to confirm seat availability and next steps.</p> */}
      {submitted ? <p className="lp-success-msg">Thank you. Your number is verified and your seat booking request has been received.</p> : null}
      {submitError ? <p className="lp-error-msg">{submitError}</p> : null}
    </form>
  );
}
