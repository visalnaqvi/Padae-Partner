import Link from "next/link";
import { Metadata } from "next";


const trustPoints = [
  "Exam-first explainers without noise",
  "Practical timelines and preparation systems",
  "Student-friendly language with verified context",
];

export const metadata: Metadata = {
  title: "Trusted Exam Guides and Study Insights",
  description:
    "Padae Partner is a modern blogging platform for students preparing for CUET, UPSC, and other competitive exams with clear guides, strategies, and trusted insights.",
  keywords:
    "Padae Partner, education blog, CUET UG preparation, UPSC preparation, study strategy, exam guidance",
};

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="eyebrow">Trusted study intelligence</p>
          <h1>Padae Partner</h1>
          <p className="hero-copy">
            Clear, credible exam guidance for students who want less confusion
            and better decisions. Read sharp preparation blogs, strategy notes,
            and practical roadmaps built for modern learners.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="#featured">
              Explore Articles
            </Link>
            <Link className="secondary-link" href="/cuet-ug-2027-coaching">
              CUET Guides
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Padae Partner insight dashboard">
          <div className="signal-panel">
            <div className="signal-header">
              <span>Learning Signal</span>
              <strong>98%</strong>
            </div>
            <div className="signal-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <img src="/globe.svg" alt="" className="hero-globe" />
          <div className="insight-chip insight-chip-top">CUET UG</div>
          <div className="insight-chip insight-chip-bottom">UPSC Strategy</div>
        </div>
      </section>

      <section className="trust-band" aria-label="Why readers trust Padae Partner">
        {trustPoints.map((point) => (
          <div key={point} className="trust-item">
            <span></span>
            <p>{point}</p>
          </div>
        ))}
      </section>

      <section id="featured" className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Featured reading</p>
          <h2>Start with clear, useful guidance</h2>
        </div>
      </section>

      <section className="home-section editorial-section">
        <div className="editorial-copy">
          <p className="eyebrow">Built for confidence</p>
          <h2>Guidance that feels calm, current, and actionable</h2>
          <p>
            Padae Partner focuses on the questions students actually ask:
            what to study, when to revise, how to compare exams, and how to
            stay consistent without getting buried under generic advice.
          </p>
        </div>
        <div className="metric-grid">
          <div>
            <strong>3</strong>
            <span>Core exam tracks</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Always available reading</span>
          </div>
          <div>
            <strong>0</strong>
            <span>Hype-driven shortcuts</span>
          </div>
        </div>
      </section>
    </main>
  );
}
