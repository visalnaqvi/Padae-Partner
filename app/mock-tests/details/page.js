import "./details.css";
import Link from "next/link";
import Image from "next/image";
import WhySection from "./WhySection";
import AnalyticsSection from "./AnalyticsSection";
import MistakeSection from "./MistakeSection";
import GrowthSection from "./GrowthSection";
import SubjectsSection from "./SubjectsSection";

export const metadata = {
  title: "CUET Mock Tests 2027 | Free Full-Length Practice | Padae Partner",
  description:
    "Practice CUET 2027 with free full-length mock tests. Get instant scores, detailed solutions, and performance analysis to improve your percentile.",
  keywords: [
    "CUET mock test 2027",
    "CUET full length mock test",
    "free CUET practice test",
    "CUET performance analysis",
    "CUET percentile practice",
  ],
  alternates: { canonical: "/mock-tests/details" },
  openGraph: {
    title: "CUET Mock Tests 2027 | Free Full-Length Practice | Padae Partner",
    description:
      "Free full-length CUET 2027 mock tests with instant scores, detailed solutions, and weak-topic analysis.",
    url: "/mock-tests/details",
    type: "website",
  },
};

const heroTrustBadges = [
  { icon: "📝", label: "100+", sub: "Mock Tests" },
  { icon: "❓", label: "10,000+", sub: "Practice Questions" },
  { icon: "✅", label: "Detailed", sub: "Solutions" },
  { icon: "📊", label: "In-depth", sub: "Analysis" },
];

const steps = [
  {
    num: "1",
    title: "Choose a Mock Test",
    desc: "Browse CUET subject and full-length tests.",
  },
  {
    num: "2",
    title: "Take the Exam",
    desc: "Attempt questions in a real exam environment.",
  },
  {
    num: "3",
    title: "Analyze & Improve",
    desc: "Review solutions and focus on weak areas.",
  },
];

const faqs = [
  {
    q: "Is the mock test based on the latest CUET pattern?",
    a: "Yes, all tests follow the latest CUET syllabus and format.",
  },
  {
    q: "Will I get solutions?",
    a: "Yes, detailed explanations are available for every question.",
  },
  {
    q: "Can I attempt a mock test multiple times?",
    a: "Yes, unlimited retakes are available.",
  },
  {
    q: "How are scores calculated?",
    a: "Scores follow the official CUET marking scheme.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MockTestsLandingPage() {
  return (
    <main className="mt-index-page">
      <section className="mt-hero" aria-label="CUET Mock Tests overview">
        <div className="mt-hero-content">
          <p className="mt-hero-eyebrow">CUET UG 2027 — Free Practice</p>
          <h1 className="mt-hero-headline">
            Crack CUET 2027 with Full-Length Mock Tests &amp; Detailed Performance Analysis
          </h1>
          <p className="mt-hero-sub">
            Practice real exam-level questions, get instant scores, view detailed solutions,
            analyze weak topics, and improve your CUET percentile before the actual exam.
          </p>
          <div className="mt-hero-actions">
            <Link className="mt-hero-btn-primary" href="/mock-tests">
              Start Free Mock Test
            </Link>
            <Link className="mt-hero-btn-secondary" href="/mock-tests">
              Browse All Mock Tests
            </Link>
          </div>
          <div className="mt-hero-trust">
            {heroTrustBadges.map((b) => (
              <div className="mt-hero-trust-item" key={b.sub}>
                <span className="mt-hero-trust-icon">{b.icon}</span>
                <div>
                  <strong>{b.label}</strong>
                  <span>{b.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-hero-visual" aria-hidden="true">
          <Image
            src="/mock_test_landing.png"
            alt="Student taking CUET mock test with score and analysis"
            width={560}
            height={480}
            priority
            className="mt-hero-img"
          />
        </div>
      </section>

      <WhySection />

      {/* ── How It Works ── */}
      <section className="mt-how-section" aria-label="How mock tests work">
        <div className="mt-how-header">
          <p className="mt-how-eyebrow">How It Works</p>
          <h2 className="mt-how-heading">3 Simple Steps to Improve Your Score</h2>
        </div>

        <ol className="mt-how-timeline">
          {steps.map((step, i) => (
            <li className="mt-how-step" key={step.num}>
              <div className="mt-how-step-card">
                <span className="mt-how-step-num">{step.num}</span>
                <div className="mt-how-step-body">
                  <span className="mt-how-step-label">Step {step.num}</span>
                  <h3 className="mt-how-step-title">{step.title}</h3>
                  <p className="mt-how-step-desc">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <span className="mt-how-arrow" aria-hidden="true">↓</span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <AnalyticsSection />

      <MistakeSection />

      <GrowthSection />

      <SubjectsSection />

      {/* ── FAQ ── */}
      <section className="mt-faq-section" aria-label="Frequently asked questions">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="mt-faq-header">
          <p className="mt-faq-eyebrow">FAQ</p>
          <h2 className="mt-faq-heading">Frequently Asked Questions</h2>
        </div>
        <div className="mt-faq-list">
          {faqs.map((f) => (
            <details className="mt-faq-item" key={f.q}>
              <summary className="mt-faq-q">
                <span>{f.q}</span>
                <span className="mt-faq-icon" aria-hidden="true">+</span>
              </summary>
              <p className="mt-faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mt-final-cta" aria-label="Start practising">
        <div className="mt-final-cta-inner">
          <h2 className="mt-final-cta-heading">Ready to Improve Your CUET Score?</h2>
          <p className="mt-final-cta-sub">
            Start practicing today and discover exactly what you need to improve
            before the actual exam.
          </p>
          <div className="mt-final-cta-actions">
            <Link className="mt-hero-btn-primary" href="/mock-tests">
              Start Free Mock Test
            </Link>
            <Link className="mt-final-cta-secondary" href="/mock-tests">
              View All Mock Tests
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
