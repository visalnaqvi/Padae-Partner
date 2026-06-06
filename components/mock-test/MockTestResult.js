"use client";

import Link from "next/link";

function getGrade(pct) {
  if (pct >= 80) return { label: "Excellent", cls: "mt-grade-excellent" };
  if (pct >= 60) return { label: "Good", cls: "mt-grade-good" };
  if (pct >= 40) return { label: "Average", cls: "mt-grade-average" };
  return { label: "Needs Improvement", cls: "mt-grade-poor" };
}

export default function MockTestResult({ test, answers, student, onViewSolutions }) {
  const { questions, defaultMarks = 4, defaultNegativeMarks = 1 } = test;

  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
  let score = 0;

  questions.forEach((q, i) => {
    const marks = q.marks ?? defaultMarks;
    const neg = q.negativeMarks ?? defaultNegativeMarks;

    if (answers[i] === undefined || answers[i] === null) {
      unattempted++;
    } else if (answers[i] === q.answer) {
      correct++;
      score += marks;
    } else {
      wrong++;
      score -= neg;
    }
  });

  const maxScore = questions.reduce((sum, q) => sum + (q.marks ?? defaultMarks), 0);
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const grade = getGrade(pct);
  const correctMarks = correct * defaultMarks;
  const wrongDeduction = wrong * defaultNegativeMarks;

  return (
    <div className="mt-result-page">
      <div className="mt-result-inner">

        {/* Hero score */}
        <div className="mt-result-hero">
          <span className="mt-result-label">Your Result</span>
          <span className="mt-score-number">{score}</span>
          <span className="mt-score-denom">out of {maxScore}</span>
          <span className="mt-score-pct">{pct}%</span>
          <span className={`mt-grade-badge ${grade.cls}`}>{grade.label}</span>
          {student?.studentName && (
            <p className="mt-result-student">{student.studentName}</p>
          )}
          <p className="mt-result-test-name">{test.title}</p>
        </div>

        {/* Breakdown */}
        <div className="mt-breakdown-row">
          <div className="mt-breakdown-card mt-breakdown-correct">
            <strong>{correct}</strong>
            <span>Correct</span>
          </div>
          <div className="mt-breakdown-card mt-breakdown-wrong">
            <strong>{wrong}</strong>
            <span>Wrong</span>
          </div>
          <div className="mt-breakdown-card mt-breakdown-skip">
            <strong>{unattempted}</strong>
            <span>Skipped</span>
          </div>
        </div>

        {/* Marking summary */}
        <div className="mt-marking-summary">
          <div className="mt-marking-row">
            <span className="mt-marking-label">Total Questions</span>
            <span className="mt-marking-value">{questions.length}</span>
          </div>
          <div className="mt-marking-row">
            <span className="mt-marking-label">Marks for Correct Answers</span>
            <span className="mt-marking-value mt-marking-value-green">+{correctMarks}</span>
          </div>
          <div className="mt-marking-row">
            <span className="mt-marking-label">Marks Deducted (Wrong)</span>
            <span className="mt-marking-value mt-marking-value-red">−{wrongDeduction}</span>
          </div>
          <div className="mt-marking-row">
            <span className="mt-marking-label">Net Score</span>
            <span className="mt-marking-value">{score}</span>
          </div>
          <div className="mt-marking-row">
            <span className="mt-marking-label">Accuracy</span>
            <span className="mt-marking-value">
              {correct + wrong > 0
                ? Math.round((correct / (correct + wrong)) * 100)
                : 0}%
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-result-actions">
          <Link className="mt-result-back-btn" href="/mock-tests">
            ← All Tests
          </Link>
          {onViewSolutions && (
            <button className="mt-start-btn" onClick={onViewSolutions}>
              View Solutions →
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
