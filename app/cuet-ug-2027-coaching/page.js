import Link from "next/link";
import LeadForm from "@/components/landing/LeadForm";
import SectionHeader from "@/components/landing/SectionHeader";
import { FeatureCard, InfoCard } from "@/components/landing/CardGrid";
import BatchClosingGraphic from "@/components/landing/BatchClosingGraphic";
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
import BarChartIcon from "@/components/icons/BarChartIcon";
import TrophyIcon from "@/components/icons/TrophyIcon";
import ReadIcon from "@/components/icons/ReadIcon";
import "./cuet-ug.css";

const pageUrl = "/cuet-ug-2027-coaching";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";
const pageTitle = "CUET UG 2027 Coaching | Online & Offline Classes, Mock Tests";
const pageDescription =
  "Padae Partner CUET UG 2027 coaching with live online & offline classes, mock tests, PYQ practice, doubt solving, study material and university admission counseling.";
const pageKeywords = [
  "CUET UG 2027 coaching",
  "CUET UG coaching 2027",
  "CUET UG 2027 classes",
  "CUET 2027 preparation",
  "CUET UG coaching",
  "CUET coaching online",
  "CUET offline coaching",
  "CUET UG online classes",
  "CUET preparation course",
  "CUET mock test series",
  "CUET previous year questions",
  "CUET UG admission counseling",
  "best CUET UG coaching",
  "CUET coaching for Delhi University",
  "CUET classes for 12th students",
  "CUET UG study material",
];

export function generateMetadata() {
  return {
    metadataBase: new URL(siteUrl),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    applicationName: "Padae Partner",
    category: "Education",
    alternates: {
      canonical: pageUrl,
    },
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
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: "Padae Partner",
      images: [
        {
          url: "/uet_ug_2025_result.png",
          width: 1200,
          height: 630,
          alt: "Padae Partner CUET UG coaching student results",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/uet_ug_2025_result.png"],
    },
  };
}

const heroPoints = [
  ["CUET UG Online Coaching", PlayCircleIcon],
  ["CUET Mock Tests", CheckCircleOutlineIcon],
  ["Doubt Sessions", MessageIcon],
  ["Previous Year Questions", BookIcon],
  ["University Admission Counseling", BankIcon],
];

const heroStats = [
  ["5000+", "Students Mentored"],
  ["95%+", "Success Rate"],
  ["12+", "Years Experience"],
  ["1000+", "University Admissions"],
];

const trustCards = [
  ["Experienced CUET Faculty", "Learn from mentors who understand CUET UG patterns, board overlap, and university admission strategy.", TeamIcon],
  ["Structured CUET Study Plan", "Follow a weekly CUET preparation plan designed to cover concepts, revision, tests, and counseling milestones.", CalendarIcon],
  ["Regular CUET Testing", "Measure readiness with topic tests, full-length CUET mock tests, and exam-style practice.", FileSearchIcon],
  ["Personalized Admission Guidance", "Get help choosing CUET subjects, target courses, and university preferences.", SolutionIcon],
];

const whyMatters = [
  ["Competition is increasing", "More students are targeting CUET every year, making early preparation and test familiarity important.", BarChartIcon],
  ["Top universities admit through CUET", "CUET scores are a key pathway for Delhi University, BHU, JMI, AMU, and other leading universities.", BankIcon],
  ["Preparation improves chances", "A guided plan helps students avoid random study, identify weak areas, and improve admission options.", TrophyIcon],
];

const benefits = [
  ["Expert CUET Mentors", "Subject experts simplify concepts and keep preparation focused on CUET UG requirements.", TeamIcon],
  ["Weekly CUET Mock Tests", "Frequent CUET mock test practice builds speed, accuracy, and confidence before the real exam.", FileSearchIcon],
  ["Performance Tracking", "Reports show strengths, weak topics, and the next actions to improve scores.", BarChartIcon],
  ["Doubt Solving", "Dedicated doubt support helps students stay consistent instead of getting stuck.", MessageIcon],
  ["Admission Counseling", "Counselors guide course selection, university targeting, and preference planning.", SolutionIcon],
  ["CUET Study Material", "Access concise notes, CUET PYQs, topic worksheets, and revision resources.", BookIcon],
];

const features = [
  ["Live Interactive Classes", "Attend concept-first CUET classes with active practice and exam discussion.", PlayCircleIcon],
  ["Recorded Sessions", "Revise missed or difficult topics anytime with organized class recordings.", ReadIcon],
  ["Topic Wise Tests", "Practice after every unit to strengthen accuracy before moving ahead.", CheckCircleOutlineIcon],
  ["Full Length Mock Tests", "Experience real exam timing, section strategy, and pressure management.", FileSearchIcon],
  ["Previous Year Questions", "Understand repeated concepts and the style of CUET UG questions.", BookIcon],
  ["Performance Reports", "Track score trends, attempted questions, accuracy, and improvement areas.", BarChartIcon],
  ["Counseling Support", "Get admission guidance from preparation through university preference filling.", SolutionIcon],
];

const universities = ["Delhi University", "BHU", "JMI", "AMU", "Other Top Universities"];

const testimonials = [
  // ["Aarav Sharma", "734/800", "Delhi University", "The mock tests and counseling sessions helped me stay clear about my target courses.", "/Aarav_Sharma.png"],
  // ["Meera Khan", "712/800", "Jamia Millia Islamia", "Weekly tests showed exactly where I needed revision before the exam.", "/Meera_Khan.png"],
  ["Ritika Verma", "748/800", "BHU", "The PYQ practice made the paper feel familiar and manageable.", "/Ritika_Verma.png"],
  ["Kabir Singh", "701/800", "AMU", "Doubt sessions helped me fix weak topics without losing momentum.", "/Kabir_Singh.png"],
  ["Ananya Das", "756/800", "Delhi University", "The study planner kept my CUET preparation structured with school work.", "/Ananya_Das.png"],
  ["Yusuf Ali", "729/800", "BHU", "Admission counseling made course and university choices much easier.", "/Yusuf_Ali.png"],
];

const resources = ["Syllabus PDF", "Important Topics", "Study Planner", "Sample Mock Test"];

const faculty = [
  ["Dr. Nisha Mehra", "Ph.D. English", "12+ years", "/Nisha_Mehra.png"],
  ["Rahul Malhotra", "M.Sc. Mathematics", "9+ years", "/Rahul_Malhotra.png"],
  ["Sana Siddiqui", "M.A. Political Science", "10+ years", "/Sana_Siddiqui.png"],
  // ["Amit Bansal", "MBA, Aptitude Specialist", "8+ years", "/Amit_Bansal.png"],
];

const plans = [
  ["Foundation", "Rs. 4,999", ["Live classes", "Topic tests", "Study material", "Monthly counseling"]],
  ["Premium", "Rs. 5,999", ["Everything in Foundation", "Weekly mocks", "Priority doubt support", "Admission counseling"]],
];

const faqs = [
  ["Who can join the CUET UG 2027 coaching program?", "Students in Class 11, Class 12, and droppers preparing for CUET UG 2027 can join."],
  ["When should I start CUET UG 2027 coaching?", "It is best to start CUET UG 2027 coaching early — ideally from Class 11 or the start of Class 12 — so you get enough time for concept building, full syllabus coverage, revision, and multiple mock tests before the exam. Droppers can join an intensive plan at any time."],
  ["Which subjects are covered in CUET UG 2027 coaching?", "Our CUET UG 2027 coaching covers the General Test, Language (English/Hindi), and major domain subjects, so you can prepare the exact subject combination required for your target university and course."],
  ["Is this CUET UG coaching online or offline?", "Both. You can join live online classes with recorded support and counseling calls, or attend in-person offline classroom batches. Choose the format that suits you best."],
  ["Do you provide CUET mock tests?", "Yes. Students get topic-wise tests, weekly CUET practice, and full-length mock tests."],
  ["Will I get CUET previous year questions?", "Yes. CUET PYQ practice is included to help students understand question patterns."],
  ["Do you help with university selection?", "Yes. Admission counseling helps students choose target courses and universities."],
  ["Can I access recorded classes?", "Yes. Recorded sessions are available for revision and missed classes."],
  ["Is study material included?", "Yes. Students receive notes, practice sheets, planners, and important topic resources."],
  ["How are doubts solved?", "Doubts are handled through dedicated sessions and mentor support."],
  ["Do you track my performance?", "Yes. Performance reports highlight accuracy, weak topics, and score improvement."],
  ["How do I book my seat?", "Submit any form on this page or use the WhatsApp and call buttons for quick help. A counselor will confirm current seat availability."],
];

const provider = {
  "@type": "EducationalOrganization",
  name: "Padae Partner",
  url: siteUrl,
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "CUET UG 2027 Coaching",
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
    {
      "@type": "CourseInstance",
      name: "CUET UG 2027 Offline Classroom Coaching",
      courseMode: "onsite",
      description:
        "In-person offline CUET UG 2027 classroom batches with experienced faculty, printed study material, and offline mock tests.",
    },
  ],
  offers: plans.map(([name, price]) => ({
    "@type": "Offer",
    name: `${name} CUET UG 2027 Coaching Plan`,
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
    { "@type": "ListItem", position: 2, name: "CUET UG 2027 Coaching", item: `${siteUrl}${pageUrl}` },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Padae Partner",
  url: siteUrl,
  description:
    "Padae Partner offers CUET UG 2027 coaching with live online and offline classes, mock tests, PYQ practice, doubt solving, and university admission counseling.",
  logo: `${siteUrl}/logo.png`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
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

export default function CuetUgLandingPage() {
  return (
    <main className="cuet-landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, breadcrumbSchema, courseSchema, faqSchema]),
        }}
      />
      {/* HERO: Above-the-fold value proposition with immediate lead capture for paid traffic. */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <span className="lp-eyebrow">CUET UG 2027 coaching</span>
          <h1>
            <span className="lp-title-highlight">CUET UG 2027 Coaching</span> — Online &amp; Offline Classes for Top University Admissions
          </h1>
          <p>
            Prepare for CUET UG 2027 with Padae Partner. Join live online classes or
            in-person offline batches with mock tests, PYQ practice, study material,
            doubt support, and university admission counseling — all in one program.
          </p>
          {/* <BatchClosingGraphic /> */}
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
          <h2>CUET UG 2027 coaching guidance for ambitious university goals.</h2>
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

      {/* SEO INTRO: Keyword-rich overview text for search engines and first-time visitors. */}
      <section className="lp-section">
        <div className="lp-prose">
          <h2>CUET UG 2027 Coaching by Padae Partner</h2>
          <p>
            Padae Partner&apos;s <strong>CUET UG 2027 coaching</strong> is a complete preparation
            program for students who want to crack the Common University Entrance Test (CUET UG)
            and secure admission into top central universities like Delhi University, BHU, JMI,
            and AMU. Whether you prefer studying from home or in a classroom, you can join our
            live <strong>online classes</strong> or in-person <strong>offline batches</strong> and
            follow a structured, exam-focused plan.
          </p>
          <p>
            The course combines concept-first teaching, regular CUET mock tests, previous year
            question (PYQ) practice, dedicated doubt-solving sessions, ready-to-use study material,
            and end-to-end admission counseling. Every part of the CUET UG 2027 coaching program is
            designed to improve your CUET score and help you plan the right university and course
            preferences with confidence.
          </p>
        </div>
      </section>

      <section className="lp-result-section" aria-label="CUET UG 2025 student results">
        <img
          className="lp-result-image"
          src="/uet_ug_2025_result.png"
          alt="CUET UG 2025 student result highlights"
        />
      </section>

      {/* UNIVERSITY ADMISSIONS COUNT: Graphic proof of student admissions from Padae Partner coaching. */}
      <section className="lp-admissions-count-section" aria-label="Padae Partner university admissions count">
        <picture>
          <source media="(max-width: 719px)" srcSet="/uni_count_mb.png" />
          <img
            className="lp-admissions-count-image"
            src="/uni_count_desktop.png"
            alt="University admissions count achieved by Padae Partner students"
          />
        </picture>
      </section>

      <section className="lp-roadmap-section" aria-label="CUET UG preparation roadmap">
        <picture>
          <source media="(max-width: 719px)" srcSet="/roadmap_mobile.png" />
          <img
            className="lp-roadmap-image"
            src="/roadmap_desktop.png"
            alt="CUET UG 2027 preparation roadmap"
          />
        </picture>
        <SectionBookButton />
      </section>

      {/* LEARNING MODES: Clarifies that both online and offline CUET classes are available. */}
      <section className="lp-section lp-soft-band" aria-label="Online and offline CUET UG classes">
        <SectionHeader
          eyebrow="Online & offline classes"
          title="Learn the way that works best for you."
          description="Padae Partner offers both live online CUET UG classes and in-person offline classroom coaching, so you can choose the format that fits your routine, location, and learning style."
          center
        />
        <div className="lp-mode-grid">
          <article className="lp-mode-card lp-mode-card-online">
            <div className="lp-mode-head">
              <span className="lp-mode-icon" aria-hidden="true">
                <PlayCircleIcon />
              </span>
              <div>
                <h3>Online CUET Classes</h3>
                <span className="lp-mode-tag">Available everywhere</span>
              </div>
            </div>
            <p>Join live interactive CUET UG classes from home and learn from expert mentors without travel.</p>
            <ul className="lp-mode-list">
              {[
                "Live interactive classes from anywhere in India",
                "Recorded sessions for revision and missed classes",
                "Online mock tests with instant performance reports",
                "Doubt solving and mentor support on chat",
              ].map((point) => (
                <li key={point}>
                  <CheckCircleOutlineIcon aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link className="lp-secondary-btn" href="/cuet-ug-2027-coaching/online-coaching">
              Explore Online Coaching
            </Link>
          </article>

          <article className="lp-mode-card lp-mode-card-offline">
            <div className="lp-mode-head">
              <span className="lp-mode-icon" aria-hidden="true">
                <BankIcon />
              </span>
              <div>
                <h3>Offline Classroom Coaching</h3>
                <span className="lp-mode-tag">In-person batches</span>
              </div>
            </div>
            <p>Prefer a classroom? Attend face-to-face CUET UG coaching with a focused peer group and direct mentor guidance.</p>
            <ul className="lp-mode-list">
              {[
                "In-person classroom teaching with experienced faculty",
                "Structured offline batches and a fixed study routine",
                "On-the-spot doubt clearing and personal attention",
                "Printed study material, PYQs, and offline mock tests",
              ].map((point) => (
                <li key={point}>
                  <CheckCircleOutlineIcon aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link className="lp-secondary-btn" href="/cuet-ug-2027-coaching/offline-coaching">
              Explore Offline Coaching
            </Link>
          </article>
        </div>
        <SectionBookButton />
      </section>

      {/* SUCCESS STORIES: Social proof section for confidence before the next lead form. */}
      <section className="lp-section lp-success-section">
        <SectionHeader eyebrow="Success stories" title="Students who prepared with clarity and confidence." />
        <div className="lp-testimonial-grid">
          {testimonials.map(([name, score, university, quote, image]) => (
            <article className="lp-testimonial-card" key={name}>
              <img className="lp-avatar-img" src={image} alt={`${name}, CUET student`} />
              <h3>{name}</h3>
              <p className="lp-score">{score} | {university}</p>
              <p>{quote}</p>
            </article>
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* FACULTY: Humanizes the institute and reinforces mentor credibility. */}
      <section className="lp-section">
        <SectionHeader eyebrow="CUET faculty" title="Learn with experienced CUET UG coaching mentors." center />
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

      {/* COURSE PLANS: Simple pricing choice architecture with the premium plan emphasized. */}
      <section className="lp-section lp-soft-band" id="course-plans">
        <SectionHeader eyebrow="CUET coaching plans" title="Choose the CUET UG preparation plan that fits your goal." center />
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
            title="Get the complete CUET UG course fee details."
            description="Submit your details to receive the Foundation and Premium fee breakdown, inclusions, and current seat offer information."
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
          description="Fill this form and our counselor will share the complete CUET UG fee structure and plan details."
          cta="Get Fee Structure"
          compact
          showOffer={false}
        />
      </section>

      {/* TRUST: Credibility signals placed early to reduce form hesitation. */}
      <section className="lp-section lp-trust-section">
        <div className="lp-trust-grid">
          {trustCards.map(([title, description, icon]) => (
            <InfoCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* WHY CUET MATTERS: Problem framing that validates urgency for the ad visitor. */}
      {/* <section className="lp-section">
        <SectionHeader
          eyebrow="Why CUET matters"
          title="A better CUET score can widen your admission choices."
          description="Students need more than syllabus coverage. They need exam practice, preference planning, and a preparation rhythm that keeps them moving."
        />
        <div className="lp-card-grid lp-three">
          {whyMatters.map(([title, description, icon], index) => (
            <InfoCard key={title} title={title} description={description} icon={icon} tag={`0${index + 1}`} />
          ))}
        </div>
        <SectionBookButton />
      </section> */}

      {/* WHY CHOOSE US: Benefit-led proof points for conversion decision making. */}
      <section className="lp-section lp-soft-band">
        <SectionHeader eyebrow="Why choose us" title="CUET UG coaching support for focused preparation." center />
        <div className="lp-feature-grid">
          {benefits.map(([title, description, icon]) => (
            <FeatureCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <SectionBookButton />
      </section>

      {/* COURSE FEATURES: Detailed offer clarity for high-intent Google Ads users. */}
      {/* <section className="lp-section">
        <SectionHeader
          eyebrow="Course features"
          title="A complete CUET UG preparation system."
          description="From live classes to admission counseling, the program is built to support both score improvement and university planning."
        />
        <div className="lp-feature-grid lp-feature-grid-wide">
          {features.map(([title, description, icon]) => (
            <FeatureCard key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
        <SectionBookButton />
      </section> */}

      {/* TARGET UNIVERSITIES: Helps students connect preparation to aspirational outcomes. */}
      <section className="lp-section lp-university-section">
        <SectionHeader eyebrow="Target universities" title="Prepare for admission opportunities at top universities." center />
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

      {/* FREE RESOURCE: Mid-page lead magnet for visitors not ready to book counseling. */}
      <section className="lp-section lp-resource-section">
        <div className="lp-resource-copy">
          <SectionHeader
            eyebrow="Free resource"
            title="Free CUET UG Preparation Kit"
            description="Download a starter kit with the essentials students need to begin organized CUET UG preparation."
          />
          <div className="lp-resource-list">
            {resources.map((resource) => (
              <span key={resource}>{resource}</span>
            ))}
          </div>
        </div>
        <LeadForm
          title="Download Free Kit"
          description="Enter your details to receive the CUET syllabus, planner, important topics, and sample mock test."
          cta="Book Your Seat Now"
          compact
        />
      </section>

      {/* SEO CONTENT: In-depth, keyword-targeted content block for topical authority. */}
      <section className="lp-section lp-soft-band">
        <div className="lp-prose">
          <h2>What you get in our CUET UG 2027 coaching program</h2>
          <p>
            Our CUET UG 2027 coaching is built to cover the full Common University Entrance Test
            journey — from concept building to final university preference filling. Here is what
            makes the program effective for serious CUET aspirants.
          </p>

          <h3>Who should join CUET UG 2027 coaching?</h3>
          <p>
            Students in Class 11, Class 12, and droppers preparing for CUET UG 2027 can join.
            Starting early gives you enough time for complete syllabus coverage, revision, and
            multiple mock tests before the exam, while a focused dropper plan helps repeaters
            improve their previous score.
          </p>

          <h3>Online and offline CUET classes</h3>
          <p>
            Choose the format that suits you. Our{" "}
            <Link href="/cuet-ug-2027-coaching/online-coaching">online CUET classes</Link> are live
            and interactive with recorded sessions for revision, so you can prepare from anywhere in
            India. Prefer a classroom? Our{" "}
            <Link href="/cuet-ug-2027-coaching/offline-coaching">offline CUET coaching</Link> batches
            offer face-to-face teaching, a fixed study routine, and on-the-spot doubt clearing.
          </p>

          <h3>CUET mock tests, PYQs and study material</h3>
          <p>
            Regular topic-wise tests, full-length CUET mock tests, and previous year question (PYQ)
            practice help you build speed, accuracy, and exam temperament. Detailed performance
            reports highlight your weak areas, and concise notes, worksheets, and revision
            resources keep your CUET UG 2027 preparation organized.
          </p>

          <h3>University admission counseling</h3>
          <p>
            Scoring well is only half the journey. Our counselors guide you through CUET subject
            selection, course shortlisting, and university preference planning for Delhi University,
            BHU, JMI, AMU, and other leading universities — so your score converts into the right
            admission.
          </p>
        </div>
        <SectionBookButton />
      </section>

      {/* FAQ: Removes objections near the bottom of the paid landing page. */}
      <section className="lp-section">
        <SectionHeader eyebrow="FAQ" title="CUET UG 2027 coaching — frequently asked questions" />
        <FAQAccordion faqs={faqs.map(([question, answer]) => ({ question, answer }))} />
        <SectionBookButton />
      </section>

      {/* FINAL CTA: Last strong conversion point with a complete lead form. */}
      <section className="lp-section lp-final-cta">
        <div className="lp-final-cta-copy">
          <span className="lp-eyebrow">Limited seat offer</span>
          <h2>Ready to Start Your CUET UG Preparation?</h2>
          <p>Book your seat and get a clear plan for subjects, mock tests, and target universities.</p>
        </div>
        <LeadForm
          title="Book Your Seat Now"
          description="A counselor will confirm seat availability and help you understand the right CUET UG preparation path."
          cta="Book Your Seat Now"
          compact
        />
      </section>

      <StickyActions />
    </main>
  );
}
