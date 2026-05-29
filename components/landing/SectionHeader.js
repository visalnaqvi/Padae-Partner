export default function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={`lp-section-header ${center ? "lp-section-header-center" : ""}`}>
      {eyebrow ? <span className="lp-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
