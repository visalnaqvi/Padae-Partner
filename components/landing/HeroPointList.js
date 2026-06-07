export default function HeroPointList({ points }) {
  return (
    <div className="lp-hero-points">
      {points.map(([point, Icon]) => (
        <span key={point}>
          {Icon ? <Icon aria-hidden="true" /> : null}
          {point}
        </span>
      ))}
    </div>
  );
}
