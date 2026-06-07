"use client"
import { useEffect, useRef, useState } from "react";

const OPTION_LETTERS = ["A", "B", "C", "D"];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function MockTestPlayer({ test, student, onComplete }) {
  const { questions, duration, defaultMarks = 4, defaultNegativeMarks = 1 } = test;

  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(duration);

  const answersRef = useRef({});
  const hasCompletedRef = useRef(false);

  function submitTest(finalAnswers) {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    onComplete(finalAnswers);
  }

  function selectAnswer(qIdx, optIdx) {
    const next = { ...answersRef.current, [qIdx]: optIdx };
    answersRef.current = next;
    setAnswers(next);
  }

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      submitTest(answersRef.current);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmitClick() {
    const answered = Object.keys(answersRef.current).length;
    const unanswered = questions.length - answered;
    const msg =
      unanswered > 0
        ? `You have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Submit anyway?`
        : "Submit the test?";
    if (!window.confirm(msg)) return;
    setTimeLeft(0);
    submitTest(answersRef.current);
  }

  const isUrgent = timeLeft <= 300; // red timer when ≤ 5 min
  const q = questions[currentQ];
  const answered = Object.keys(answers).length;
  const progress = (answered / questions.length) * 100;
  const marks = q.marks ?? defaultMarks;
  const negMarks = q.negativeMarks ?? defaultNegativeMarks;

  return (
    <div className="mt-player">
      {/* Sticky header */}
      <header className={`mt-player-header${isUrgent ? " mt-timer-urgent" : ""}`}>
        <span className="mt-header-title">{test.title}</span>

        <div className="mt-timer-wrap">
          <span className="mt-timer-icon" aria-hidden="true">⏱</span>
          <span className="mt-timer" aria-live="polite" aria-label={`${formatTime(timeLeft)} remaining`}>
            {formatTime(timeLeft)}
          </span>
        </div>

        <button className="mt-player-submit-btn" onClick={handleSubmitClick}>
          Submit Test
        </button>
      </header>

      <div className="mt-player-body">
        {/* Main column */}
        <div className="mt-main-column">
          {/* Progress */}
          <div className="mt-progress-bar" role="progressbar" aria-valuenow={answered} aria-valuemax={questions.length}>
            <div className="mt-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* Question card */}
          <div className="mt-question-card">
            <div className="mt-question-badge">
              <span className="mt-question-num">Question {currentQ + 1} / {questions.length}</span>
              <span className="mt-question-marks">+{marks} / -{negMarks}</span>
            </div>
            <p className="mt-question-text">{q.question}</p>

            <div className="mt-options" role="radiogroup">
              {q.options.map((option, idx) => {
                const isSelected = answers[currentQ] === idx;
                return (
                  <button
                    key={idx}
                    className={`mt-option-btn${isSelected ? " mt-option-btn-selected" : ""}`}
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => selectAnswer(currentQ, idx)}
                  >
                    <span className="mt-option-letter">{OPTION_LETTERS[idx]}</span>
                    <span className="mt-option-text">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prev / Next / Submit */}
          <div className="mt-actions-row">
            <button
              className="mt-nav-action-btn"
              onClick={() => setCurrentQ((q) => q - 1)}
              disabled={currentQ === 0}
            >
              ← Prev
            </button>
            {currentQ === questions.length - 1 ? (
              <button className="mt-player-submit-btn" onClick={handleSubmitClick}>
                Submit Test
              </button>
            ) : (
              <button
                className="mt-nav-action-btn"
                onClick={() => setCurrentQ((q) => q + 1)}
              >
                Next →
              </button>
            )}
          </div>
        </div>

        {/* Side column — navigator */}
        <aside className="mt-side-column">
          <div className="mt-navigator-card">
            <p className="mt-navigator-title">Questions</p>
            <div className="mt-navigator-grid">
              {questions.map((_, idx) => {
                const isAnswered = answers[idx] !== undefined;
                const isCurrent = idx === currentQ;
                let cls = "mt-nav-pill";
                if (isAnswered) cls += " mt-nav-pill-answered";
                if (isCurrent) cls += " mt-nav-pill-current";
                return (
                  <button
                    key={idx}
                    className={cls}
                    onClick={() => setCurrentQ(idx)}
                    aria-label={`Question ${idx + 1}${isAnswered ? ", answered" : ""}`}
                    aria-current={isCurrent ? "true" : undefined}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-navigator-legend">
              <span className="mt-legend-item">
                <span className="mt-legend-dot mt-legend-dot-answered" />
                Answered ({answered})
              </span>
              <span className="mt-legend-item">
                <span className="mt-legend-dot mt-legend-dot-unanswered" />
                Not answered ({questions.length - answered})
              </span>
              <span className="mt-legend-item">
                <span className="mt-legend-dot mt-legend-dot-current" />
                Current
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
