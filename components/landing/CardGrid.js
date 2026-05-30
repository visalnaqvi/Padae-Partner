import LandingIcon from "./LandingIcon";

export function InfoCard({ title, description, tag, icon }) {
  return (
    <article className="lp-card">
      {icon ? <LandingIcon name={icon} className="lp-card-icon" /> : null}
      {tag ? <span className="lp-card-tag">{tag}</span> : null}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function FeatureCard({ title, description, icon }) {
  return (
    <article className="lp-feature-card">
      <span aria-hidden="true" className="lp-check">
        <LandingIcon name={icon} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
