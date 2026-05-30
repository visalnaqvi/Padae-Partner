import LandingIcon from "./LandingIcon";

export default function HeroPointList({ points }) {
  return (
    <div className="lp-hero-points">
      {points.map(([point, icon]) => {
        return (
          <span key={point}>
            <LandingIcon name={icon} />
            {point}
          </span>
        );
      })}
    </div>
  );
}
