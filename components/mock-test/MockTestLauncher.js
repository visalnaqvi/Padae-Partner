"use client";
import { useState } from "react";
import MockTestApp from "./MockTestApp";

function formatDuration(seconds) {
  const m = Math.round((seconds || 0) / 60);
  return m > 0 ? `${m} min` : null;
}

// Renders the "Start Test" button on the crawlable landing page. The timed
// player only mounts (and the timer only starts) once the student clicks Start,
// taking over the screen as a full-page overlay above the landing content.
export default function MockTestLauncher({ test }) {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <div className="mt-player-overlay" role="dialog" aria-modal="true" aria-label={test.title}>
        <MockTestApp test={test} />
      </div>
    );
  }

  const qCount = test.questionCount ?? test.questions?.length ?? 0;
  const durationLabel = formatDuration(test.duration);

  return (
    <div className="mt-tl-cta">
      <button
        type="button"
        className="mt-hero-btn-primary mt-tl-start"
        onClick={() => setStarted(true)}
      >
        Start Test →
      </button>
      <span className="mt-tl-cta-note">
        Timer starts when you click · {qCount} questions
        {durationLabel ? ` · ${durationLabel}` : ""}
      </span>
    </div>
  );
}
