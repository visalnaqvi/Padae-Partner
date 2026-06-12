import Link from "next/link";
import LeadForm from "@/components/landing/LeadForm";
import SectionHeader from "@/components/landing/SectionHeader";
import { FeatureCard, InfoCard } from "@/components/landing/CardGrid";
import FAQAccordion from "@/components/landing/FAQAccordion";
import HeroPointList from "@/components/landing/HeroPointList";
import StickyActions from "@/components/landing/StickyActions";
import PlayCircleIcon from "@/components/icons/PlayCircleIcon";
import CheckCircleOutlineIcon from "@/components/icons/CheckCircleOutlineIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import BookIcon from "@/components/icons/BookIcon";
import BankIcon from "@/components/icons/BankIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import FileSearchIcon from "@/components/icons/FileSearchIcon";
import SolutionIcon from "@/components/icons/SolutionIcon";
import ReadIcon from "@/components/icons/ReadIcon";
import { siteUrl, heroStats, universities, testimonials, faculty, plans } from "../shared";

const pageUrl = "/cuet-ug-2027-coaching/online-coaching";
const parentUrl = "/cuet-ug-2027-coaching";
const pageTitle = "CUET UG 2027 Online Coaching & Live Classes";
const pageDescription =
  "Join Padae Partner CUET UG 2027 online coaching — live interactive classes, recorded sessions, online mock tests, PYQ practice, doubt solving and admission counseling from home.";
const pageKeywords = [
  "CUET UG 2027 online coaching",
  "CUET UG online classes 2027",
  "CUET online coaching",
  "CUET UG online classes",
  "CUET 2027 online preparation",
  "CUET live online classes",
  "online CUET coaching for 12th students",
  "CUET online mock tests",
  "best CUET online coaching",
  "CUET online classes Delhi University",
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
          alt: "Padae Partner CUET UG online coaching student results",
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
  ["Live Online CUET Classes", PlayCircleIcon],
  ["Recorded Sessions for Revision", ReadIcon],
  ["Online CUET Mock Tests", CheckCircleOutlineIcon],
  ["Doubt Solving on Chat", MessageIcon],
  ["Admission Counseling", BankIcon],
];

const benefits = [
  ["Learn From Anywhere", "Attend live CUET UG classes from any city in India — no travel and no relocation needed.", PlayCircleIcon],
  ["Recorded Class Library", "Rewatch every online session anytime to revise difficult topics at your own pace.", ReadIcon],
  ["Online Mock Tests", "Take CUET mock tests online and receive instant, detailed performance reports.", FileSearchIcon],
  ["Live Doubt Solving", "Ask doubts during class or in dedicated online doubt sessions with mentor support.", MessageIcon],
  ["Digital Study Material", "Access notes, CUET PYQs, and worksheets on any device, anytime you need them.", BookIcon],
  ["Flexible Class Timings", "Balance school and CUET preparation with online class timings built for students.", CalendarIcon],
];

const trustCards = [
  ["Experienced Online Faculty", "Learn from CUET mentors who specialise in interactive live online teaching.", TeamIcon],
  ["Structured Online Study Plan", "Follow a weekly online plan covering concepts, tests, revision, and counseling.", CalendarIcon],
  ["Regular Online Testing", "Track readiness with online topic tests and full-length CUET mock tests.", FileSearchIcon],
  ["Online Admission Guidance", "Get counseling calls for CUET subject choice and university preference planning.", SolutionIcon],
];

const faqs = [
  ["What is CUET UG 2027 online coaching?", "CUET UG 2027 online coaching is a live, internet-based preparation program where you attend interactive CUET classes from home, get recorded sessions for revision, take online mock tests, and receive admission counseling — all without travelling to a centre."],
  ["Are the online classes live or recorded?", "Both. Classes are live and interactive so you can ask doubts in real time, and every session is recorded so you can revise or catch up on a missed class anytime."],
  ["Do I need a special device for online coaching?", "No. A smartphone, tablet, or laptop with a stable internet connection is enough. Classes run on a simple, easy-to-use platform."],
  ["Will I get online mock tests and PYQs?", "Yes. You get topic-wise online tests, full-length CUET mock tests, and previous year question (PYQ) practice with instant performance reports."],
  ["How are doubts solved in online coaching?", "Doubts are solved live during class and through dedicated online doubt sessions, with additional mentor support available on chat."],
  ["Is offline classroom coaching also available?", "Yes. If you prefer a classroom, Padae Partner also offers in-person offline CUET UG 2027 coaching batches. You can choose whichever format suits you."],
  ["How do I join CUET UG 2027 online coaching?", "Submit any form on this page or use the WhatsApp and call buttons. A counselor will confirm batch timings, fees, and current seat availability."],
];

const provider = {
  "@type": "EducationalOrganization",
  name: "Padae Partner",
  url: siteUrl,
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "CUET UG 2027 Online Coaching",
  description: pageDescription,
  provider,
  educationalLevel: "Undergraduate entrance exam preparation",
  inLanguage: ["en", "hi"],
  url: `${siteUrl}${pageUrl}`,
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: "CUET UG 2027 Online Coaching",
      courseMode: "online",
      description:
        "Live online CUET UG 2027 classes with recorded sessions, online mock tests, doubt solving, and admission counseling.",
    },
  ],
  offers: plans.map(([name, price]) => ({
    "@type": "Offer",
    name: `${name} CUET UG 2027 Online Coaching Plan`,
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
    { "@type": "ListItem", position: 3, name: "Online Coaching", item: `${siteUrl}${pageUrl}` },
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

export default function CuetUgOnlineCoachingPage() {
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
        <span>Online Coaching</span>
      </nav>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <span className="lp-eyebrow">CUET UG 2027 online coaching</span>
          <h1>
            <span className="lp-title-highlight">CUET UG 2027 Online Coaching</span> — Live Classes You Can Join From Home
          </h1>
          <p>
            Prepare for CUET UG 2027 with Padae Partner&apos;s live online coaching. Attend
            interactive classes from anywhere in India, revise with recorded sessions, take online
            mock tests, and get admission counseling — all in one structured program.
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
          <h2>CUET UG 2027 online coaching for ambitious university goals.</h2>
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
          <h2>CUET UG 2027 Online Coaching by Padae Partner</h2>
          <p>
            Padae Partner&apos;s <strong>CUET UG 2027 online coaching</strong> brings expert
            classroom-quality teaching to your screen. With live interactive classes, recorded
            sessions, online mock tests, PYQ practice, doubt solving, and admission counseling, you
            can prepare for the Common University Entrance Test (CUET UG) from anywhere in India —
            without losing time to travel.
          </p>
          <p>
            This program is part of our complete{" "}
            <Link href={parentUrl}>CUET UG 2027 coaching</Link>. Prefer a classroom instead? Explore
            our <Link href="/cuet-ug-2027-coaching/offline-coaching">offline CUET coaching</Link>{" "}
            batches and choose the format that fits your routine and learning style.
          </p>
        </div>
      </section>

      <section className="lp-result-section" aria-label="CUET UG 2025 student results">
        <img
          className="lp-result-image"
          src="/uet_ug_2025_result.png"
          alt="CUET UG 2025 online coaching student result highlights"
        />
      </section>

      {/* WHY ONLINE */}
      <section className="lp-section lp-soft-band">
        <SectionHeader eyebrow="Why online coaching" title="Why students choose our CUET UG online classes." center />
        <div className="lp-feature-grid">
          {benefits.map(([title, description, icon]) => (
            <FeatureCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* SUCCESS STORIES */}
      <section className="lp-section lp-success-section">
        <SectionHeader eyebrow="Success stories" title="Students who prepared online with clarity and confidence." />
        <div className="lp-testimonial-grid">
          {testimonials.map(([name, score, university, quote, image]) => (
            <article className="lp-testimonial-card" key={name}>
              <img className="lp-avatar-img" src={image} alt={`${name}, CUET online coaching student`} />
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
        <SectionHeader eyebrow="CUET faculty" title="Learn with experienced CUET UG online mentors." center />
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
        <SectionHeader eyebrow="Online coaching plans" title="Choose the CUET UG online plan that fits your goal." center />
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
            title="Get the complete CUET UG online course fee details."
            description="Submit your details to receive the Foundation and Premium online fee breakdown, inclusions, and current seat offer information."
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
          description="Fill this form and our counselor will share the complete CUET UG online fee structure and plan details."
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
        <SectionHeader eyebrow="Target universities" title="Prepare online for admission to top universities." center />
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
          <h2>How our CUET UG 2027 online coaching works</h2>
          <p>
            Online coaching only works when it is structured, interactive, and accountable. Here is
            how we keep your CUET UG 2027 online preparation on track.
          </p>

          <h3>Live, interactive online classes</h3>
          <p>
            Classes are taught live by experienced CUET faculty, so you can ask questions and join
            discussions in real time — just like a classroom, but from home. Every session is
            recorded, so revision and missed classes are never a problem.
          </p>

          <h3>Online mock tests and PYQ practice</h3>
          <p>
            Regular online topic tests, full-length CUET mock tests, and previous year question
            (PYQ) practice build your speed and accuracy. Instant performance reports show your
            weak areas so revision stays focused and efficient.
          </p>

          <h3>Doubt solving and mentor support</h3>
          <p>
            Get your doubts cleared during live classes, in dedicated online doubt sessions, and
            through ongoing mentor support on chat — so you never stay stuck on a difficult topic.
          </p>

          <h3>Online admission counseling</h3>
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
        <SectionHeader eyebrow="FAQ" title="CUET UG 2027 online coaching — frequently asked questions" />
        <FAQAccordion faqs={faqs.map(([question, answer]) => ({ question, answer }))} />
        <SectionBookButton />
      </section>

      {/* FINAL CTA */}
      <section className="lp-section lp-final-cta">
        <div className="lp-final-cta-copy">
          <span className="lp-eyebrow">Limited seat offer</span>
          <h2>Ready to Start Your CUET UG Online Preparation?</h2>
          <p>Book your seat and get a clear online plan for subjects, mock tests, and target universities.</p>
        </div>
        <LeadForm
          title="Book Your Seat Now"
          description="A counselor will confirm seat availability and help you understand the right CUET UG online preparation path."
          cta="Book Your Seat Now"
          compact
        />
      </section>

      <StickyActions />
    </main>
  );
}
