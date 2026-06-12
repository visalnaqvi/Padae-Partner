import ReadIcon from "@/components/icons/ReadIcon";
import SafetyCertificateIcon from "@/components/icons/SafetyCertificateIcon";
import CheckCircleOutlineIcon from "@/components/icons/CheckCircleOutlineIcon";

export default function Hero({ title, subtitle, label = "Study Guide", meta }) {
  return (
    <section className="hero blog-hero">
      <div className="hero-content">
        <span className="blog-kicker">
          <ReadIcon />
          {label}
        </span>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
        {meta ? (
          <div className="blog-hero-byline">
            {meta.author ? <span>By {meta.author}</span> : null}
            {meta.updatedLabel ? <span>Updated {meta.updatedLabel}</span> : null}
            {meta.readingMinutes ? (
              <span>{meta.readingMinutes} min read</span>
            ) : null}
          </div>
        ) : null}
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
