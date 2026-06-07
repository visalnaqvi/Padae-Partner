import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import CloseCircleIcon from "@/components/icons/CloseCircleIcon";
import FileTextIcon from "@/components/icons/FileTextIcon";
import ThunderboltIcon from "@/components/icons/ThunderboltIcon";
import WarningIcon from "@/components/icons/WarningIcon";
import BookIcon from "@/components/icons/BookIcon";

const options = [
  { letter: "A", text: "25 J", correct: true },
  { letter: "B", text: "20 J", wrong: true },
  { letter: "C", text: "50 J" },
  { letter: "D", text: "10 J" },
];

const solutionBlocks = [
  {
    Icon: FileTextIcon,
    color: "#3b82f6",
    title: "Explanation",
    body: (
      <>
        Kinetic energy of a body is given by: KE = ½mv²
        <br />
        Where, m = mass of the body = 2 kg
        <br />
        v = velocity of the body = 5 m/s
        <br />
        KE = ½ × 2 × 5² = 25 J
      </>
    ),
  },
  {
    Icon: ThunderboltIcon,
    color: "#ef9b2d",
    title: "Shortcut Method",
    body: "Use KE = 0.5 × m × v² directly to save time.",
  },
  {
    Icon: WarningIcon,
    color: "#f97316",
    title: "Important Concept",
    body: "Kinetic energy depends on both mass and the square of velocity. If velocity doubles, kinetic energy becomes four times.",
  },
  {
    Icon: BookIcon,
    color: "#8b5cf6",
    title: "Related Chapter",
    body: "Work, Energy and Power",
  },
];

export default function MistakeSection() {
  return (
    <section className="mt-mistake-section" aria-label="Detailed solutions">
      <div className="mt-mistake-header">
        <p className="mt-mistake-eyebrow">Detailed Solutions</p>
        <h2 className="mt-mistake-heading">Learn From Every Mistake</h2>
        <p className="mt-mistake-sub">
          Every question includes a detailed explanation so that mistakes become
          learning opportunities.
        </p>
      </div>

      <div className="mt-mistake-grid">
        {/* Question card */}
        <div className="mt-q-card">
          <div className="mt-q-head">
            <span className="mt-q-num">Q. 14</span>
            <span className="mt-q-tag mt-q-tag-subject">Physics</span>
            <span className="mt-q-tag mt-q-tag-level">Medium</span>
          </div>
          <p className="mt-q-text">
            A body of mass 2 kg is moving with a velocity of 5 m/s. What is its
            kinetic energy?
          </p>
          <div className="mt-q-options">
            {options.map((o) => (
              <div
                className={`mt-q-option${o.correct ? " mt-q-option-correct" : ""}${
                  o.wrong ? " mt-q-option-wrong" : ""
                }`}
                key={o.letter}
              >
                <span className="mt-q-option-letter">{o.letter}</span>
                <span className="mt-q-option-text">{o.text}</span>
                {o.correct && (
                  <CheckCircleIcon className="mt-q-mark" style={{ color: "#2f7d62" }} />
                )}
                {o.wrong && (
                  <CloseCircleIcon className="mt-q-mark" style={{ color: "#d8422f" }} />
                )}
              </div>
            ))}
          </div>
          <div className="mt-q-your-answer">
            <strong>Your Answer: B (20 J)</strong>
            <span>This is not the correct answer.</span>
          </div>
        </div>

        {/* Solution panel */}
        <div className="mt-sol-panel">
          <div className="mt-sol-correct">
            <CheckCircleIcon style={{ color: "#2f7d62", fontSize: 20 }} />
            <span>Correct Answer: A (25 J)</span>
          </div>

          {solutionBlocks.map((b) => (
            <div className="mt-sol-block" key={b.title}>
              <p className="mt-sol-block-title">
                <b.Icon style={{ color: b.color, fontSize: 16 }} />
                {b.title}
              </p>
              <p className="mt-sol-block-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
