export function InfoCard({ title, description, tag, icon: Icon }) {
  return (
    <article className="lp-card">
      {Icon ? <Icon aria-hidden="true" className="lp-card-icon" /> : null}
      {tag ? <span className="lp-card-tag">{tag}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="lp-feature-card">
      <span aria-hidden="true" className="lp-check">
        {Icon ? <Icon aria-hidden="true" /> : null}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
