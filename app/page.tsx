import Link from "next/link";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CUET UG Coaching 2027 | Online, Offline & Recorded Classes",
  description:
    "Join Padae Partner for expert CUET UG coaching 2027 with live online & offline classes, recorded sessions, mock tests, PYQs, notes, study material, and admission counseling for Delhi University, BHU, JMI, AMU and other top universities.",
  keywords:
    "CUET UG coaching, CUET coaching 2027, CUET coaching online, CUET coaching offline, CUET mock tests, CUET notes, CUET previous year questions, CUET study material, best CUET coaching, CUET UG preparation, CUET UG classes",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "CUET UG Coaching 2027 | Padae Partner",
    description:
      "Expert CUET UG coaching with live online & offline classes, mock tests, PYQs, notes, and university admission counseling for top central universities.",
    url: "/",
    siteName: "Padae Partner",
    images: [
      {
        url: "/uet_ug_2025_result.png",
        width: 1200,
        height: 630,
        alt: "Padae Partner CUET UG Coaching — Student Results",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CUET UG Coaching 2027 | Padae Partner",
    description:
      "Expert CUET UG coaching with live online & offline classes, mock tests, PYQs, and notes.",
    images: ["/uet_ug_2025_result.png"],
  },
};

const heroPoints = [
  "Live Online & Offline CUET Classes",
  "CUET Mock Tests & Previous Year Questions",
  "Subject Notes & Study Material",
  "Doubt Sessions & Admission Counseling",
];

const stats = [
  ["5000+", "Students Mentored"],
  ["95%+", "Success Rate"],
  ["12+", "Years Experience"],
  ["1000+", "University Admissions"],
];

const offerings = [
  {
    eyebrow: "CUET UG Coaching",
    title: "Online, Offline & Recorded Classes",
    desc: "Expert-led live classes, flexible offline batches, and recorded sessions — so you never miss a concept. Covers all CUET UG domains with structured weekly plans.",
    cta: "Explore Coaching",
    href: "/cuet-ug-2027-coaching",
    badge: "Most Popular",
    featured: true,
  },
  {
    eyebrow: "Practice & Testing",
    title: "Mock Tests & PYQs",
    desc: "Topic-wise tests, full-length CUET mock tests, and previous year question banks to sharpen speed, accuracy, and exam readiness before the real exam.",
    cta: "View Mock Tests",
    href: "/cuet-ug-2027-coaching#course-plans",
    badge: null,
    featured: false,
  },
  {
    eyebrow: "Study Resources",
    title: "Blogs, Notes & Study Material",
    desc: "In-depth CUET preparation blogs, subject-wise notes, syllabus breakdowns, preparation strategies, and latest updates — all in one place.",
    cta: "Read the Blog",
    href: "/blog",
    badge: null,
    featured: false,
  },
];

const whyPoints = [
  [
    "Expert CUET Faculty",
    "Subject mentors with years of CUET coaching experience simplify concepts and keep preparation focused on what the exam actually tests.",
  ],
  [
    "Flexible Learning Modes",
    "Choose from live online classes, in-person offline batches, or catch up anytime with organized recorded sessions.",
  ],
  [
    "Structured Weekly Plan",
    "A clear CUET preparation roadmap with concept sessions, revision cycles, topic tests, and mock test milestones.",
  ],
  [
    "Regular Mock Testing",
    "Frequent CUET mock tests and topic-wise tests give performance data and build the test-day confidence every student needs.",
  ],
  [
    "Dedicated Doubt Support",
    "Doubt-solving sessions ensure no student stays stuck. Keep momentum going through difficult topics with mentor support.",
  ],
  [
    "Admission Counseling",
    "Personalized guidance on subject selection, course targeting, university preference filling, and cutoff planning.",
  ],
];

const contentCategories = [
  { label: "Latest CUET Blogs", href: "/blog" },
  { label: "CUET Mock Tests", href: "/cuet-ug-2027-coaching" },
  { label: "Notes & Study Material", href: "/blog" },
  { label: "Previous Year Questions", href: "/blog" },
  { label: "Exam Updates & News", href: "/blog" },
];

const universities = [
  "Delhi University",
  "BHU",
  "Jamia Millia Islamia",
  "AMU",
  "Other Top Universities",
];

const testimonials = [
  {
    name: "Aarav Sharma",
    score: "734/800",
    uni: "Delhi University",
    quote:
      "The mock tests and counseling sessions helped me stay clear about my target courses throughout preparation.",
  },
  {
    name: "Ritika Verma",
    score: "748/800",
    uni: "BHU",
    quote:
      "PYQ practice made the paper feel familiar and manageable. I knew exactly what style of questions to expect.",
  },
  {
    name: "Ananya Das",
    score: "756/800",
    uni: "Delhi University",
    quote:
      "The study planner kept my CUET preparation structured and balanced alongside regular school work.",
  },
];

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Padae Partner",
  url: siteUrl,
  description:
    "CUET UG coaching with online, offline, and recorded classes, mock tests, notes, and admission counseling for top central universities.",
  offers: {
    "@type": "Offer",
    description: "CUET UG Coaching 2027 — Foundation & Premium Plans",
    url: `${siteUrl}/cuet-ug-2027-coaching`,
    priceCurrency: "INR",
    price: "4999",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Padae Partner",
  url: siteUrl,
};

export default function Home() {
  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgSchema, websiteSchema]),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="home-hero" aria-label="CUET UG coaching overview">
        <div className="home-hero-content">
          <p className="eyebrow">CUET UG Coaching 2027</p>
          <h1>Expert CUET UG Coaching for Top University Admissions</h1>
          <p className="hero-copy">
            Online, offline, and recorded CUET classes with mock tests, PYQs,
            study material, and admission counseling. Join 5000+ students
            preparing for Delhi University, BHU, JMI, AMU and other top
            central universities.
          </p>
          <ul className="hp-hero-points">
            {heroPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <Link className="primary-link" href="/cuet-ug-2027-coaching">
              Book Free Counseling
            </Link>
            <Link className="secondary-link" href="/blog">
              Study Resources
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Coaching modes and outcomes">
          <div className="hp-coaching-panel">
            <p className="hp-panel-label">CUET UG 2027 — Padae Partner</p>
            <div className="hp-modes">
              <span className="hp-mode-tag">
                <span className="hp-dot hp-dot-green"></span>
                Live Online
              </span>
              <span className="hp-mode-tag">
                <span className="hp-dot hp-dot-amber"></span>
                Offline Batches
              </span>
              <span className="hp-mode-tag">
                <span className="hp-dot hp-dot-blue"></span>
                Recorded
              </span>
            </div>
          </div>
          <div className="signal-panel">
            <div className="signal-header">
              <span>Student Success Rate</span>
              <strong>95%+</strong>
            </div>
            <div className="signal-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="insight-chip hp-chip-right">5000+ Students</div>
          <div className="insight-chip hp-chip-left">Seats Filling</div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="hp-stats-band" aria-label="Padae Partner student outcomes">
        {stats.map(([value, label]) => (
          <div className="hp-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* ===== OFFERINGS ===== */}
      <section className="home-section hp-offerings-section" id="offerings">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>CUET UG Coaching, Mock Tests & Study Resources</h2>
          <p className="hp-section-sub">
            Everything you need to prepare for CUET UG 2027 — from concept
            classes to admission support.
          </p>
        </div>
        <div className="hp-offerings-grid">
          {offerings.map((o) => (
            <article
              className={`hp-offering-card${o.featured ? " hp-offering-featured" : ""}`}
              key={o.title}
            >
              {o.badge && <span className="hp-offer-badge">{o.badge}</span>}
              <p className="eyebrow">{o.eyebrow}</p>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <Link
                className={o.featured ? "primary-link" : "secondary-link"}
                href={o.href}
              >
                {o.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ===== WHY PADAE PARTNER ===== */}
      <section className="home-section hp-why-section">
        <div className="hp-why-header">
          <p className="eyebrow">Why Padae Partner</p>
          <h2>A Complete CUET UG Preparation System</h2>
          <p className="hp-section-sub">
            From concept clarity to admission confirmation — expert mentors,
            structured plans, regular testing, and personalized counseling in
            one program.
          </p>
        </div>
        <div className="hp-why-grid">
          {whyPoints.map(([title, desc]) => (
            <div className="hp-why-card" key={title}>
              <span className="hp-why-dot"></span>
              <div>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hp-section-cta">
          <Link className="primary-link" href="/cuet-ug-2027-coaching">
            View Full Coaching Program
          </Link>
          <Link className="secondary-link" href="/cuet-ug-2027-coaching#course-plans">
            See Pricing
          </Link>
        </div>
      </section>

      {/* ===== CONTENT HUB ===== */}
      <section className="home-section hp-content-hub">
        <div className="section-heading">
          <p className="eyebrow">Blogs, Notes & Resources</p>
          <h2>CUET Study Content — All in One Place</h2>
          <p className="hp-section-sub">
            Latest blogs, mock test papers, subject notes, and question banks
            for CUET UG aspirants — updated regularly.
          </p>
        </div>
        <div className="hp-content-cats">
          {contentCategories.map((c) => (
            <Link className="hp-cat-pill" href={c.href} key={c.label}>
              {c.label}
            </Link>
          ))}
        </div>
        <div className="hp-section-cta">
          <Link className="secondary-link" href="/blog">
            Browse All Resources
          </Link>
        </div>
      </section>

      {/* ===== TARGET UNIVERSITIES ===== */}
      <section className="home-section hp-uni-section">
        <div className="section-heading">
          <p className="eyebrow">Target Universities</p>
          <h2>Prepare for Admissions at Top Central Universities</h2>
          <p className="hp-section-sub">
            CUET scores open doors to some of India's most respected central
            universities. We help you get there.
          </p>
        </div>
        <div className="hp-uni-grid">
          {universities.map((u) => (
            <div className="hp-uni-card" key={u}>
              <span className="hp-uni-abbr">{u.slice(0, 2).toUpperCase()}</span>
              <p>{u}</p>
            </div>
          ))}
        </div>
        <div className="hp-section-cta">
          <Link className="primary-link" href="/cuet-ug-2027-coaching">
            Book Free Counseling
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="home-section hp-testimonials-section"
        aria-label="Student success stories"
      >
        <div className="section-heading">
          <p className="eyebrow hp-eyebrow-light">Success Stories</p>
          <h2 className="hp-heading-light">
            Students Who Prepared with Confidence
          </h2>
        </div>
        <div className="hp-testimonials-grid">
          {testimonials.map((t) => (
            <article className="hp-testimonial-card" key={t.name}>
              <div className="hp-testimonial-score">{t.score}</div>
              <blockquote>{t.quote}</blockquote>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.uni}</span>
              </footer>
            </article>
          ))}
        </div>
        <div className="hp-section-cta">
          <Link className="primary-link" href="/cuet-ug-2027-coaching">
            Join the Program
          </Link>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="hp-cta-banner" aria-label="Start CUET coaching">
        <div className="hp-cta-copy">
          <p className="eyebrow">Limited Seats</p>
          <h2>Start Your CUET UG 2027 Preparation Today</h2>
          <p>
            Book a free counseling session to understand your preparation plan,
            target universities, subject selection, and next steps.
          </p>
        </div>
        <div className="hp-cta-actions">
          <Link className="primary-link hp-cta-primary" href="/cuet-ug-2027-coaching">
            Book Free Counseling
          </Link>
          <Link className="secondary-link hp-cta-sec" href="/blog">
            Study Resources
          </Link>
        </div>
      </section>
    </main>
  );
}
