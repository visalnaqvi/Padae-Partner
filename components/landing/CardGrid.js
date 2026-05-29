export function InfoCard({ title, description, tag }) {
  return (
    <article className="lp-card">
      {tag ? <span className="lp-card-tag">{tag}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function FeatureCard({ title, description }) {
  return (
    <article className="lp-feature-card">
      <span aria-hidden="true" className="lp-check">+</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
