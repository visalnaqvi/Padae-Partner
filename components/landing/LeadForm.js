"use client";

import { useId, useState } from "react";

export default function LeadForm({
  title = "Get Free Counseling",
  description = "Share your details and our CUET counselor will call you shortly.",
  cta = "Get Free Counseling",
  compact = false,
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
        <span className="lp-eyebrow">Free counseling call</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

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
      <p className="lp-form-note">No spam. A counselor will contact you for admission planning.</p>
      {submitted ? <p className="lp-success-msg">Thank you. Your counseling request has been received.</p> : null}
    </form>
  );
}
