// Google Ads conversion tracking helpers.
// The base Google tag (gtag.js) is loaded site-wide in app/layout.tsx; these
// helpers fire specific Google Ads conversion events from client components.

// Conversion action: a lead form (book consulting / fee structure) is submitted.
const SUBMIT_LEAD_FORM = "AW-18241059929/ePmiCMTcxL8cENn4gfpD";
// Conversion action: the lead verifies their phone number via OTP.
const VERIFY_NUMBER = "AW-18241059929/FRT5CPaW078cENn4gfpD";

function reportConversion(params) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", params);
}

// Fired when a lead successfully submits any LeadForm (a new lead is created).
export function trackLeadFormSubmit() {
  reportConversion({
    send_to: SUBMIT_LEAD_FORM,
    value: 1.0,
    currency: "INR",
  });
}

// Fired when a lead successfully verifies their phone number with the OTP.
export function trackNumberVerified() {
  reportConversion({
    send_to: VERIFY_NUMBER,
  });
}
