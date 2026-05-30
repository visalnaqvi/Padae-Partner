"use client";

import { useEffect, useMemo, useState } from "react";
import LandingIcon from "./LandingIcon";
import { getBatchClosingDetails } from "./OfferTimer";

export default function BatchClosingGraphic() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 30000);

    return () => window.clearInterval(timer);
  }, []);

  const details = useMemo(() => getBatchClosingDetails(now), [now]);

  return (
    <div className="lp-seat-graphic" aria-label={`${details.seatsLeft} seats remaining. Batch closes on ${details.closingDateLabel}.`}>
      <div className="lp-seat-meter" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="lp-seat-main">
        <div className="lp-seat-count">
          <span className="lp-seat-number">{details.seatsLeft}</span>
          <span className="lp-seat-label">Seats Left</span>
        </div>
        <div className="lp-seat-copy">
          <span className="lp-offer-label">
            <span aria-hidden="true" className="lp-offer-pulse" />
            Batch closing fast
          </span>
          <strong>Closes on {details.closingDateLabel}</strong>
          <p>Reserve your place before the timer hits zero.</p>
        </div>
      </div>
      <div className="lp-seat-deadline">
        <span>
          <LandingIcon name="calendar" />
          Friday deadline
        </span>
        <span>
          <LandingIcon name="clock" />
          Live countdown
        </span>
      </div>
    </div>
  );
}
