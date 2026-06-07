import Link from "next/link";

const OPTION_LETTERS = ["A", "B", "C", "D"];

function getStatus(q, userAnswer, defaultMarks, defaultNegativeMarks) {
  const marks = q.marks ?? defaultMarks;
  const neg = q.negativeMarks ?? defaultNegativeMarks;
  if (userAnswer === undefined || userAnswer === null) {
    return { type: "skipped", label: "Skipped", marksText: "0", cls: "mt-sol-status-skip" };
  }
  if (userAnswer === q.answer) {
    return { type: "correct", label: "Correct", marksText: `+${marks}`, cls: "mt-sol-status-correct" };
  }
  return { type: "wrong", label: "Wrong", marksText: `−${neg}`, cls: "mt-sol-status-wrong" };
}

function getOptionCls(optIdx, correctIdx, userAnswer) {
  const isCorrect = optIdx === correctIdx;
  const isSelected = optIdx === userAnswer;

  if (isCorrect && isSelected) return "mt-sol-option mt-sol-option-correct-selected";
  if (isCorrect) return "mt-sol-option mt-sol-option-correct";
  if (isSelected) return "mt-sol-option mt-sol-option-wrong-selected";
  return "mt-sol-option";
}

function getLetterCls(optIdx, correctIdx, userAnswer) {
  const isCorrect = optIdx === correctIdx;
  const isSelected = optIdx === userAnswer;
  if (isCorrect) return "mt-sol-letter mt-sol-letter-correct";
  if (isSelected && !isCorrect) return "mt-sol-letter mt-sol-letter-wrong";
  return "mt-sol-letter";
}

export default function MockTestSolutions({ test, answers, student }) {
  const { questions, defaultMarks = 4, defaultNegativeMarks = 1 } = test;

  let totalScore = 0;
  let correct = 0, wrong = 0, skipped = 0;
  questions.forEach((q, i) => {
    const marks = q.marks ?? defaultMarks;
    const neg = q.negativeMarks ?? defaultNegativeMarks;
    const a = answers[i];
    if (a === undefined || a === null) { skipped++; }
    else if (a === q.answer) { correct++; totalScore += marks; }
    else { wrong++; totalScore -= neg; }
  });

  return (
    <div className="mt-solutions-page">
      <div className="mt-solutions-inner">

        {/* Header */}
        <div className="mt-solutions-header">
          <div className="mt-solutions-title-row">
            <div>
              <p className="mt-solutions-label">Answer Sheet</p>
              <h1 className="mt-solutions-title">{test.title}</h1>
              {student?.studentName && (
                <p className="mt-solutions-student">{student.studentName}</p>
              )}
            </div>
            <div className="mt-solutions-score-box">
              <span className="mt-solutions-score-num">{totalScore}</span>
              <span className="mt-solutions-score-denom">
                / {questions.reduce((s, q) => s + (q.marks ?? defaultMarks), 0)}
              </span>
            </div>
          </div>
          <div className="mt-solutions-tally">
            <span className="mt-tally-item mt-tally-correct">
              <span className="mt-tally-icon">✓</span> {correct} Correct
            </span>
            <span className="mt-tally-item mt-tally-wrong">
              <span className="mt-tally-icon">✗</span> {wrong} Wrong
            </span>
            <span className="mt-tally-item mt-tally-skip">
              <span className="mt-tally-icon">—</span> {skipped} Skipped
            </span>
          </div>
        </div>

        {/* Questions */}
        <div className="mt-solutions-list">
          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const status = getStatus(q, userAnswer, defaultMarks, defaultNegativeMarks);

            return (
              <div className={`mt-solution-card mt-solution-card-${status.type}`} key={i}>
                <div className="mt-sol-card-header">
                  <span className="mt-sol-qnum">Q{i + 1}</span>
                  <span className={`mt-sol-status ${status.cls}`}>
                    {status.label}
                  </span>
                  <span className={`mt-sol-marks ${status.cls}`}>
                    {status.marksText}
                  </span>
                </div>

                <p className="mt-sol-question-text">{q.question}</p>

                <div className="mt-sol-options">
                  {q.options.map((opt, optIdx) => (
                    <div
                      key={optIdx}
                      className={getOptionCls(optIdx, q.answer, userAnswer)}
                    >
                      <span className={getLetterCls(optIdx, q.answer, userAnswer)}>
                        {OPTION_LETTERS[optIdx]}
                      </span>
                      <span className="mt-sol-option-text">{opt}</span>
                      {optIdx === q.answer && (
                        <span className="mt-sol-correct-mark" aria-label="Correct answer">✓</span>
                      )}
                      {optIdx === userAnswer && optIdx !== q.answer && (
                        <span className="mt-sol-wrong-mark" aria-label="Your answer">✗</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="mt-solutions-actions">
          <Link className="mt-result-back-btn" href="/mock-tests">
            ← All Tests
          </Link>
          <Link className="mt-start-btn" href="/cuet-ug-2027-coaching">
            Book Free Counseling
          </Link>
        </div>

      </div>
    </div>
  );
}
