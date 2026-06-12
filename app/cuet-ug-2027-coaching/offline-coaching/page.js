import Link from "next/link";
import LeadForm from "@/components/landing/LeadForm";
import SectionHeader from "@/components/landing/SectionHeader";
import { FeatureCard, InfoCard } from "@/components/landing/CardGrid";
import FAQAccordion from "@/components/landing/FAQAccordion";
import HeroPointList from "@/components/landing/HeroPointList";
import StickyActions from "@/components/landing/StickyActions";
import CheckCircleOutlineIcon from "@/components/icons/CheckCircleOutlineIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import BookIcon from "@/components/icons/BookIcon";
import BankIcon from "@/components/icons/BankIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import FileSearchIcon from "@/components/icons/FileSearchIcon";
import SolutionIcon from "@/components/icons/SolutionIcon";
import { siteUrl, heroStats, universities, testimonials, faculty, plans } from "../shared";

const pageUrl = "/cuet-ug-2027-coaching/offline-coaching";
const parentUrl = "/cuet-ug-2027-coaching";
const pageTitle = "CUET UG 2027 Offline Coaching & Classroom Classes";
const pageDescription =
  "Join Padae Partner CUET UG 2027 offline coaching — in-person classroom batches with experienced faculty, printed study material, offline mock tests, doubt clearing and admission counseling.";
const pageKeywords = [
  "CUET UG 2027 offline coaching",
  "CUET offline coaching",
  "CUET UG classroom coaching",
  "CUET offline classes 2027",
  "CUET classroom coaching 2027",
  "CUET coaching center",
  "offline CUET coaching for 12th students",
  "CUET offline mock tests",
  "best CUET offline coaching",
  "CUET classroom batches",
];

export function generateMetadata() {
  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: `${pageTitle} | Padae Partner` },
    description: pageDescription,
    keywords: pageKeywords,
    applicationName: "Padae Partner",
    category: "Education",
    alternates: { canonical: pageUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: `${pageTitle} | Padae Partner`,
      description: pageDescription,
      url: pageUrl,
      siteName: "Padae Partner",
      images: [
        {
          url: "/uet_ug_2025_result.png",
          width: 1200,
          height: 630,
          alt: "Padae Partner CUET UG offline coaching student results",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | Padae Partner`,
      description: pageDescription,
      images: ["/uet_ug_2025_result.png"],
    },
  };
}

const heroPoints = [
  ["In-Person Classroom Classes", BankIcon],
  ["Experienced Faculty", TeamIcon],
  ["Offline CUET Mock Tests", CheckCircleOutlineIcon],
  ["On-the-Spot Doubt Clearing", MessageIcon],
  ["Admission Counseling", SolutionIcon],
];

const benefits = [
  ["Face-to-Face Teaching", "Learn directly from CUET faculty in a focused classroom environment that keeps you engaged.", BankIcon],
  ["Fixed Study Routine", "A regular offline batch schedule builds discipline and a steady CUET preparation rhythm.", CalendarIcon],
  ["On-the-Spot Doubt Clearing", "Ask questions instantly in class and clear doubts the moment they come up.", MessageIcon],
  ["Peer Learning Environment", "Stay motivated by preparing alongside a serious peer group with healthy competition.", TeamIcon],
  ["Printed Study Material", "Get physical notes, CUET PYQs, and worksheets you can study and revise offline.", BookIcon],
  ["Offline Mock Tests", "Sit for exam-style offline CUET mock tests in a real test-like environment.", FileSearchIcon],
];

const trustCards = [
  ["Experienced Classroom Faculty", "Learn from CUET mentors who understand classroom teaching and exam strategy.", TeamIcon],
  ["Structured Offline Plan", "Follow a fixed weekly classroom plan covering concepts, tests, and revision.", CalendarIcon],
  ["Regular Offline Testing", "Track readiness with offline topic tests and full-length CUET mock tests.", FileSearchIcon],
  ["Personal Admission Guidance", "Get one-on-one counseling for CUET subject choice and university preferences.", SolutionIcon],
];

const faqs = [
  ["What is CUET UG 2027 offline coaching?", "CUET UG 2027 offline coaching is an in-person classroom program where you attend face-to-face CUET classes with experienced faculty, get printed study material, sit for offline mock tests, and receive admission counseling at the centre."],
  ["What are the benefits of offline classroom coaching?", "Offline coaching offers face-to-face teaching, a fixed study routine, on-the-spot doubt clearing, a motivating peer group, and a distraction-free classroom environment that many students find ideal for serious preparation."],
  ["Do you provide printed study material?", "Yes. Offline students receive physical notes, CUET PYQs, worksheets, and revision resources for organised offline study."],
  ["Will I get offline mock tests and PYQs?", "Yes. You get topic-wise tests, full-length offline CUET mock tests in a real test-like setting, and previous year question (PYQ) practice with performance feedback."],
  ["How are doubts solved in offline coaching?", "Doubts are cleared on the spot during class and through one-on-one interaction with faculty, so you never carry unresolved doubts forward."],
  ["Is online coaching also available?", "Yes. If you prefer to study from home, Padae Partner also offers live online CUET UG 2027 coaching. You can choose whichever format suits you."],
  ["How do I join CUET UG 2027 offline coaching?", "Submit any form on this page or use the WhatsApp and call buttons. A counselor will confirm batch timings, fees, centre details, and current seat availability."],
];

const provider = {
  "@type": "EducationalOrganization",
  name: "Padae Partner",
  url: siteUrl,
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "CUET UG 2027 Offline Coaching",
  description: pageDescription,
  provider,
  educationalLevel: "Undergraduate entrance exam preparation",
  inLanguage: ["en", "hi"],
  url: `${siteUrl}${pageUrl}`,
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "CUET UG 2027 Offline Classroom Coaching",
      courseMode: "onsite",
      description:
        "In-person offline CUET UG 2027 classroom batches with experienced faculty, printed study material, offline mock tests, and admission counseling.",
    },
  ],
  offers: plans.map(([name, price]) => ({
    "@type": "Offer",
    name: `${name} CUET UG 2027 Offline Coaching Plan`,
    price: price.replace("Rs. ", "").replace(",", ""),
    priceCurrency: "INR",
    category: "Paid",
    availability: "https://schema.org/InStock",
    url: `${siteUrl}${pageUrl}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "CUET UG 2027 Coaching", item: `${siteUrl}${parentUrl}` },
    { "@type": "ListItem", position: 3, name: "Offline Coaching", item: `${siteUrl}${pageUrl}` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function SectionBookButton() {
  return (
    <div className="lp-section-action">
      <a className="lp-primary-btn" href="#lead-form">
        Book Your Seat Now
      </a>
    </div>
  );
}

export default function CuetUgOfflineCoachingPage() {
  return (
    <main className="cuet-landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, courseSchema, faqSchema]),
        }}
      />

      <nav className="lp-breadcrumb" aria-label="Breadcrumb">
        <Link href={parentUrl}>CUET UG 2027 Coaching</Link>
        <span aria-hidden="true">/</span>
        <span>Offline Coaching</span>
      </nav>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <span className="lp-eyebrow">CUET UG 2027 offline coaching</span>
          <h1>
            <span className="lp-title-highlight">CUET UG 2027 Offline Coaching</span> — In-Person Classroom Classes
          </h1>
          <p>
            Prepare for CUET UG 2027 with Padae Partner&apos;s offline classroom coaching. Get
            face-to-face teaching from experienced faculty, printed study material, offline mock
            tests, on-the-spot doubt clearing, and admission counseling in a focused batch.
          </p>
          <HeroPointList points={heroPoints} />
          <div className="lp-hero-actions">
            <a className="lp-primary-btn" href="#lead-form">
              Book Your Seat Now
            </a>
            <a className="lp-hero-fee-btn" href="#fee-structure-form">
              View Fee Structure from Rs. 4,999
            </a>
          </div>
        </div>
        <LeadForm anchorId="lead-form" />
      </section>

      <section className="lp-stats-section" aria-label="Padae Partner student outcomes">
        <div className="lp-stats-copy">
          <span className="lp-eyebrow">Trusted by CUET aspirants</span>
          <h2>CUET UG 2027 offline coaching for ambitious university goals.</h2>
        </div>
        <div className="lp-stats-grid">
          {heroStats.map(([value, label]) => (
            <article className="lp-stat-card" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="lp-section">
        <div className="lp-prose">
          <h2>CUET UG 2027 Offline Coaching by Padae Partner</h2>
          <p>
            Padae Partner&apos;s <strong>CUET UG 2027 offline coaching</strong> gives you the
            structure and focus of a real classroom. With in-person teaching by experienced faculty,
            printed study material, offline mock tests, on-the-spot doubt clearing, and admission
            counseling, you get a disciplined, distraction-free environment to crack the Common
            University Entrance Test (CUET UG).
          </p>
          <p>
            This program is part of our complete{" "}
            <Link href={parentUrl}>CUET UG 2027 coaching</Link>. Prefer to study from home? Explore
            our <Link href="/cuet-ug-2027-coaching/online-coaching">online CUET coaching</Link> and
            choose the format that fits your routine and learning style.
          </p>
        </div>
      </section>

      <section className="lp-result-section" aria-label="CUET UG 2025 student results">
        <img
          className="lp-result-image"
          src="/uet_ug_2025_result.png"
          alt="CUET UG 2025 offline coaching student result highlights"
        />
      </section>

      {/* WHY OFFLINE */}
      <section className="lp-section lp-soft-band">
        <SectionHeader eyebrow="Why offline coaching" title="Why students choose our CUET UG classroom coaching." center />
        <div className="lp-feature-grid">
          {benefits.map(([title, description, icon]) => (
            <FeatureCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* SUCCESS STORIES */}
      <section className="lp-section lp-success-section">
        <SectionHeader eyebrow="Success stories" title="Students who prepared in class with clarity and confidence." />
        <div className="lp-testimonial-grid">
          {testimonials.map(([name, score, university, quote, image]) => (
            <article className="lp-testimonial-card" key={name}>
              <img className="lp-avatar-img" src={image} alt={`${name}, CUET offline coaching student`} />
              <h3>{name}</h3>
              <p className="lp-score">{score} | {university}</p>
              <p>{quote}</p>
            </article>
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* FACULTY */}
      <section className="lp-section">
        <SectionHeader eyebrow="CUET faculty" title="Learn with experienced CUET UG classroom mentors." center />
        <div className="lp-faculty-grid">
          {faculty.map(([name, qualification, experience, image]) => (
            <article className="lp-faculty-card" key={name}>
              <img className="lp-faculty-img" src={image} alt={`${name}, CUET faculty`} />
              <h3>{name}</h3>
              <p>{qualification}</p>
              <span>{experience} experience</span>
            </article>
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* PLANS */}
      <section className="lp-section lp-soft-band" id="course-plans">
        <SectionHeader eyebrow="Offline coaching plans" title="Choose the CUET UG offline plan that fits your goal." center />
        <div className="lp-plan-grid">
          {plans.map(([name, price, items], index) => (
            <article className={`lp-plan-card ${index === 1 ? "lp-plan-featured" : ""}`} key={name}>
              {index === 1 ? <span className="lp-plan-badge">Most popular</span> : null}
              <h3>{name}</h3>
              <p className="lp-plan-price">{price}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="lp-secondary-btn" href="#lead-form">Book Your Seat Now</a>
            </article>
          ))}
        </div>
        <SectionBookButton />
      </section>

      <section className="lp-section lp-fee-form-section">
        <div className="lp-fee-copy">
          <SectionHeader
            eyebrow="Fee structure"
            title="Get the complete CUET UG offline course fee details."
            description="Submit your details to receive the Foundation and Premium offline fee breakdown, inclusions, and current seat offer information."
          />
          <div className="lp-fee-list">
            <span>Foundation: Rs. 4,999</span>
            <span>Premium: Rs. 5,999</span>
            <span>Counselor callback included</span>
          </div>
        </div>
        <LeadForm
          anchorId="fee-structure-form"
          eyebrow="Fee structure"
          title="View Fee Structure"
          description="Fill this form and our counselor will share the complete CUET UG offline fee structure and plan details."
          cta="Get Fee Structure"
          compact
          showOffer={false}
        />
      </section>

      {/* TRUST */}
      <section className="lp-section lp-trust-section">
        <div className="lp-trust-grid">
          {trustCards.map(([title, description, icon]) => (
            <InfoCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* TARGET UNIVERSITIES */}
      <section className="lp-section lp-university-section">
        <SectionHeader eyebrow="Target universities" title="Prepare in class for admission to top universities." center />
        <div className="lp-university-grid">
          {universities.map((university) => (
            <article className="lp-university-card" key={university}>
              <div className="lp-logo-placeholder">{university.slice(0, 2).toUpperCase()}</div>
              <h3>{university}</h3>
            </article>
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* SEO CONTENT */}
      <section className="lp-section lp-soft-band">
        <div className="lp-prose">
          <h2>How our CUET UG 2027 offline coaching works</h2>
          <p>
            A good classroom program combines great teaching with discipline and accountability.
            Here is how we keep your CUET UG 2027 offline preparation on track.
          </p>

          <h3>Face-to-face classroom teaching</h3>
          <p>
            Experienced CUET faculty teach concept-first classes in a focused batch, keeping you
            engaged and accountable. The fixed schedule builds a steady study routine that is hard
            to maintain alone.
          </p>

          <h3>Printed material and offline mock tests</h3>
          <p>
            You receive physical notes, worksheets, and CUET PYQs for offline study, plus regular
            topic tests and full-length offline mock tests in a real test-like environment to build
            exam temperament.
          </p>

          <h3>On-the-spot doubt clearing</h3>
          <p>
            Doubts are cleared the moment they come up — during class and through direct interaction
            with faculty — and a serious peer group keeps your motivation high.
          </p>

          <h3>Personal admission counseling</h3>
          <p>
            Our counselors guide CUET subject selection, course shortlisting, and university
            preference planning for Delhi University, BHU, JMI, AMU, and other leading universities,
            so your score converts into the right admission.
          </p>
        </div>
        <SectionBookButton />
      </section>

      {/* FAQ */}
      <section className="lp-section">
        <SectionHeader eyebrow="FAQ" title="CUET UG 2027 offline coaching — frequently asked questions" />
        <FAQAccordion faqs={faqs.map(([question, answer]) => ({ question, answer }))} />
        <SectionBookButton />
      </section>

      {/* FINAL CTA */}
      <section className="lp-section lp-final-cta">
        <div className="lp-final-cta-copy">
          <span className="lp-eyebrow">Limited seat offer</span>
          <h2>Ready to Start Your CUET UG Classroom Preparation?</h2>
          <p>Book your seat and get a clear offline plan for subjects, mock tests, and target universities.</p>
        </div>
        <LeadForm
          title="Book Your Seat Now"
          description="A counselor will confirm seat availability and help you understand the right CUET UG offline preparation path."
          cta="Book Your Seat Now"
          compact
        />
      </section>

      <StickyActions />
    </main>
  );
}
