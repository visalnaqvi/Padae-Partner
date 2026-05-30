"use client";

import { useEffect, useMemo, useState } from "react";
import LandingIcon from "./LandingIcon";

const OFFER_SECONDS = 20 * 60;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return { minutes, seconds };
}

export default function OfferTimer({ compact = false }) {
  const [secondsLeft, setSecondsLeft] = useState(OFFER_SECONDS);
  const expired = secondsLeft <= 0;
  const timeLabel = useMemo(() => formatTime(Math.max(secondsLeft, 0)), [secondsLeft]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((current) => Math.max(current - 1, 0));
    }, 1000);

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
            Limited seat booking offer
          </span>
          <strong>{expired ? "Booking fee is now ₹2,000" : "₹500 offer ends soon"}</strong>
        </div>
      </div>
      <div className="lp-offer-bottom">
        {!expired ? (
          <div className="lp-countdown" aria-label={`${timeLabel.minutes} minutes and ${timeLabel.seconds} seconds remaining`}>
            <span className="lp-countdown-unit">
              <span className="lp-countdown-number">{timeLabel.minutes}</span>
              <span className="lp-countdown-label">Min</span>
            </span>
            <span className="lp-countdown-separator" aria-hidden="true">:</span>
            <span className="lp-countdown-unit">
              <span className="lp-countdown-number">{timeLabel.seconds}</span>
              <span className="lp-countdown-label">Sec</span>
            </span>
          </div>
        ) : null}
        <p>{expired ? "Submit the form to request current availability." : "After this timer, seat booking becomes ₹2,000."}</p>
      </div>
    </div>
  );
}
