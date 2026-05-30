"use client";

import { useEffect, useMemo, useState } from "react";
import LandingIcon from "./LandingIcon";

export function getBatchClosingDetails(now = new Date()) {
  const closingDate = new Date(now);
  const daysUntilFriday = (5 - now.getDay() + 7) % 7;

  closingDate.setDate(now.getDate() + daysUntilFriday);
  closingDate.setHours(23, 59, 59, 999);

  const seatsLeft = Math.max(1, 31 - now.getDate());
  const totalMs = Math.max(closingDate.getTime() - now.getTime(), 0);
  const totalMinutes = Math.ceil(totalMs / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  return {
    seatsLeft,
    closingDateLabel: closingDate.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "short",
    }),
    days: days.toString().padStart(2, "0"),
    hours: hours.toString().padStart(2, "0"),
    minutes: minutes.toString().padStart(2, "0"),
    expired: totalMinutes <= 0,
  };
}

export default function OfferTimer({ compact = false }) {
  const [now, setNow] = useState(() => new Date());
  const details = useMemo(() => getBatchClosingDetails(now), [now]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`lp-offer-timer ${compact ? "lp-offer-timer-compact" : ""}`}>
      <div className="lp-offer-top">
        <div className="lp-offer-icon">
          <LandingIcon name="clock" />
        </div>
        <div className="lp-offer-copy">
          <span className="lp-offer-label">
            <span aria-hidden="true" className="lp-offer-pulse" />
            Batch closing countdown
          </span>
          <strong>{details.expired ? "Batch closing time reached" : `Closes on ${details.closingDateLabel}`}</strong>
        </div>
      </div>
      <div className="lp-offer-bottom">
        {!details.expired ? (
          <div
            className="lp-countdown"
            aria-label={`${details.days} days, ${details.hours} hours and ${details.minutes} minutes remaining`}
          >
            <span className="lp-countdown-unit">
              <span className="lp-countdown-number">{details.days}</span>
              <span className="lp-countdown-label">Days</span>
            </span>
            <span className="lp-countdown-separator" aria-hidden="true">:</span>
            <span className="lp-countdown-unit">
              <span className="lp-countdown-number">{details.hours}</span>
              <span className="lp-countdown-label">Hours</span>
            </span>
            <span className="lp-countdown-separator" aria-hidden="true">:</span>
            <span className="lp-countdown-unit">
              <span className="lp-countdown-number">{details.minutes}</span>
              <span className="lp-countdown-label">Min</span>
            </span>
          </div>
        ) : null}
        <p>{details.expired ? "Submit the form to request current availability." : `${details.seatsLeft} seats are currently left for this batch.`}</p>
      </div>
    </div>
  );
}
