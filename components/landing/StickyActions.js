"use client";

import { useState } from "react";
import LeadForm from "./LeadForm";
import WhatsAppOutlined from "../icons/WhatsAppOutlined";
import PhoneFilled from "../icons/PhoneFilled";

const PHONE = "+918920152023";
const WHATSAPP_NUMBER = "918920152023";
const WHATSAPP_MESSAGE = "Hi, I want to book my CUET UG 2027 seat.";

const MODE_CONFIG = {
  whatsapp: {
    title: "Chat with us on WhatsApp",
    cta: "Continue to WhatsApp",
  },
  call: {
    title: "Talk to a counselor",
    cta: "Continue to Call",
  },
};

export default function StickyActions() {
  // null when closed; "whatsapp" or "call" identifies which action to run
  // after the lead form is submitted and the number is verified.
  const [mode, setMode] = useState(null);

  function closeModal() {
    setMode(null);
  }

  // Runs after the booking + verify conversions have fired inside LeadForm.
  function performAction() {
    if (mode === "whatsapp") {
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    } else if (mode === "call") {
      window.location.href = `tel:${PHONE}`;
    }
  }

  const config = mode ? MODE_CONFIG[mode] : null;

  return (
    <>
      <div className="lp-sticky-contact" aria-label="Quick contact actions">
        <button
          type="button"
          className="lp-sticky-whatsapp"
          onClick={() => setMode("whatsapp")}
          aria-label="Contact on WhatsApp"
          title="WhatsApp"
        >
          <WhatsAppOutlined aria-hidden="true" />
        </button>
        <button
          type="button"
          className="lp-sticky-call"
          onClick={() => setMode("call")}
          aria-label="Call now"
          title="Call"
        >
          <PhoneFilled aria-hidden="true" />
        </button>
      </div>

      {config ? (
        <div className="lp-modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="lp-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lp-modal-close" onClick={closeModal} aria-label="Close">
              &times;
            </button>
            <LeadForm
              title={config.title}
              cta={config.cta}
              compact
              showOffer={false}
              onComplete={performAction}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
