"use client";

import { useId, useState } from "react";
import OfferTimer from "./OfferTimer";

export default function LeadForm({
  title = "Book Your Seat Now",
  description = "Share your details and reserve your CUET UG preparation seat before the current batch closes.",
  cta = "Book Your Seat Now",
  compact = false,
  showOffer = true,
}) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={`lp-lead-form ${compact ? "lp-lead-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="lp-form-copy">
        <span className="lp-eyebrow">Limited seats</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {showOffer ? <OfferTimer compact /> : null}

      <div className="lp-form-grid">
        <label htmlFor={`${formId}-name`}>
          Student Name
          <input id={`${formId}-name`} name="studentName" type="text" placeholder="Enter full name" required />
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
          />
        </label>
        <label htmlFor={`${formId}-class`}>
          Class
          <select id={`${formId}-class`} name="class" required defaultValue="">
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
          <select id={`${formId}-course`} name="targetCourse" required defaultValue="">
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

      <button className="lp-primary-btn" type="submit">{cta}</button>
      <p className="lp-form-note">No spam. A counselor will contact you to confirm seat availability and next steps.</p>
      {submitted ? <p className="lp-success-msg">Thank you. Your seat booking request has been received.</p> : null}
    </form>
  );
}
