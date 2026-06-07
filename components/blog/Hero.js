import ReadIcon from "@/components/icons/ReadIcon";
import SafetyCertificateIcon from "@/components/icons/SafetyCertificateIcon";
import CheckCircleOutlineIcon from "@/components/icons/CheckCircleOutlineIcon";

export default function Hero({ title, subtitle, label = "Study Guide" }) {
  return (
    <section className="hero blog-hero">
      <div className="hero-content">
        <span className="blog-kicker">
          <ReadIcon />
          {label}
        </span>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
        <div className="blog-hero-trust">
          <span>
            <SafetyCertificateIcon /> Editor reviewed
          </span>
          <span>
            <CheckCircleOutlineIcon /> Clear action steps
          </span>
        </div>
      </div>
    </section>
  );
}
