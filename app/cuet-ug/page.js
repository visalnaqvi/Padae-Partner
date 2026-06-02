import LeadForm from "@/components/landing/LeadForm";
import SectionHeader from "@/components/landing/SectionHeader";
import { FeatureCard, InfoCard } from "@/components/landing/CardGrid";
import BatchClosingGraphic from "@/components/landing/BatchClosingGraphic";
import FAQAccordion from "@/components/landing/FAQAccordion";
import HeroPointList from "@/components/landing/HeroPointList";
import PlaceholderImage from "@/components/landing/PlaceholderImage";
import StickyActions from "@/components/landing/StickyActions";
import "./cuet-ug.css";

export function generateMetadata() {
  return {
    title: "CUET UG 2027 Coaching Program | Book Your Seat",
    description:
      "Book your CUET UG 2027 preparation seat with live classes, mock tests, study material, doubt sessions, and admission counseling for top universities.",
    openGraph: {
      title: "CUET UG 2027 Preparation Program",
      description:
        "Expert CUET UG coaching with live classes, mock tests, PYQs, performance tracking, and limited seat booking.",
      url: "/cuet-ug",
      siteName: "Padae Partner",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "CUET UG 2027 Coaching Program",
      description:
        "Book your CUET UG 2027 preparation seat and get expert guidance, mock tests, and admission counseling.",
    },
  };
}

const heroPoints = [
  ["Live Classes", "play"],
  ["Mock Tests", "check"],
  ["Doubt Sessions", "message"],
  ["Previous Year Questions", "book"],
  ["College Admission Guidance", "bank"],
];

const heroStats = [
  ["5000+", "Students Mentored"],
  ["95%+", "Success Rate"],
  ["12+", "Years Experience"],
  ["1000+", "University Admissions"],
];

const trustCards = [
  ["Experienced Faculty", "Learn from mentors who understand CUET patterns, board overlap, and university admission strategy.", "team"],
  ["Structured Study Plan", "Follow a weekly plan designed to cover concepts, revision, tests, and counseling milestones.", "calendar"],
  ["Regular Testing", "Measure readiness with topic tests, full-length mocks, and exam-style practice.", "fileSearch"],
  ["Personalized Guidance", "Get help choosing subjects, target courses, and university preferences.", "solution"],
];

const whyMatters = [
  ["Competition is increasing", "More students are targeting CUET every year, making early preparation and test familiarity important.", "barChart"],
  ["Top universities admit through CUET", "CUET scores are a key pathway for Delhi University, BHU, JMI, AMU, and other leading universities.", "bank"],
  ["Preparation improves chances", "A guided plan helps students avoid random study, identify weak areas, and improve admission options.", "trophy"],
];

const benefits = [
  ["Expert Mentors", "Subject experts simplify concepts and keep preparation focused on CUET requirements.", "team"],
  ["Weekly Mock Tests", "Frequent practice builds speed, accuracy, and confidence before the real exam.", "fileSearch"],
  ["Performance Tracking", "Reports show strengths, weak topics, and the next actions to improve scores.", "barChart"],
  ["Doubt Solving", "Dedicated doubt support helps students stay consistent instead of getting stuck.", "message"],
  ["Admission Counseling", "Counselors guide course selection, university targeting, and preference planning.", "solution"],
  ["Study Material", "Access concise notes, PYQs, topic worksheets, and revision resources.", "book"],
];

const features = [
  ["Live Interactive Classes", "Attend concept-first CUET classes with active practice and exam discussion.", "play"],
  ["Recorded Sessions", "Revise missed or difficult topics anytime with organized class recordings.", "read"],
  ["Topic Wise Tests", "Practice after every unit to strengthen accuracy before moving ahead.", "check"],
  ["Full Length Mock Tests", "Experience real exam timing, section strategy, and pressure management.", "fileSearch"],
  ["Previous Year Questions", "Understand repeated concepts and the style of CUET UG questions.", "book"],
  ["Performance Reports", "Track score trends, attempted questions, accuracy, and improvement areas.", "barChart"],
  ["Counseling Support", "Get admission guidance from preparation through university preference filling.", "solution"],
];

const universities = ["Delhi University", "BHU", "JMI", "AMU", "Other Top Universities"];

const testimonials = [
  ["Aarav Sharma", "734/800", "Delhi University", "The mock tests and counseling sessions helped me stay clear about my target courses."],
  ["Meera Khan", "712/800", "Jamia Millia Islamia", "Weekly tests showed exactly where I needed revision before the exam."],
  ["Ritika Verma", "748/800", "BHU", "The PYQ practice made the paper feel familiar and manageable."],
  ["Kabir Singh", "701/800", "AMU", "Doubt sessions helped me fix weak topics without losing momentum."],
  ["Ananya Das", "756/800", "Delhi University", "The study planner kept my CUET preparation structured with school work."],
  ["Yusuf Ali", "729/800", "BHU", "Admission counseling made course and university choices much easier."],
];

const resources = ["Syllabus PDF", "Important Topics", "Study Planner", "Sample Mock Test"];

const faculty = [
  ["Dr. Nisha Mehra", "Ph.D. English", "12+ years"],
  ["Rahul Malhotra", "M.Sc. Mathematics", "9+ years"],
  ["Sana Siddiqui", "M.A. Political Science", "10+ years"],
  ["Amit Bansal", "MBA, Aptitude Specialist", "8+ years"],
];

const plans = [
  ["Foundation", "Rs. 4,999", ["Live classes", "Topic tests", "Study material", "Monthly counseling"]],
  ["Premium", "Rs. 5,999", ["Everything in Foundation", "Weekly mocks", "Priority doubt support", "Admission counseling"]],
];

const faqs = [
  ["Who can join the CUET UG 2027 program?", "Students in Class 11, Class 12, and droppers preparing for CUET UG 2027 can join."],
  ["Is this program online or offline?", "The program is designed for live online learning with recorded support and counseling calls."],
  ["Do you provide mock tests?", "Yes. Students get topic-wise tests, weekly practice, and full-length mock tests."],
  ["Will I get previous year questions?", "Yes. PYQ practice is included to help students understand CUET question patterns."],
  ["Do you help with university selection?", "Yes. Admission counseling helps students choose target courses and universities."],
  ["Can I access recorded classes?", "Yes. Recorded sessions are available for revision and missed classes."],
  ["Is study material included?", "Yes. Students receive notes, practice sheets, planners, and important topic resources."],
  ["How are doubts solved?", "Doubts are handled through dedicated sessions and mentor support."],
  ["Do you track my performance?", "Yes. Performance reports highlight accuracy, weak topics, and score improvement."],
  ["How do I book my seat?", "Submit any form on this page or use the WhatsApp and call buttons for quick help. A counselor will confirm current seat availability."],
];

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
      {/* HERO: Above-the-fold value proposition with immediate lead capture for paid traffic. */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <span className="lp-eyebrow">Crack CUET UG 2027</span>
          <h1>
            <span className="lp-title-highlight">Secure Admission in Top Central Universities</span> 
          </h1>
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
          <h2>Proven guidance for ambitious university goals.</h2>
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
        <SectionHeader eyebrow="Why choose us" title="Everything students need to prepare with direction." center />
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

      {/* SUCCESS STORIES: Social proof section for confidence before the next lead form. */}
      <section className="lp-section">
        <SectionHeader eyebrow="Success stories" title="Students who prepared with clarity and confidence." />
        <div className="lp-testimonial-grid">
          {testimonials.map(([name, score, university, quote], index) => (
            <article className="lp-testimonial-card" key={name}>
              <PlaceholderImage label={name} tone={index % 2 ? "coral" : "teal"} className="lp-avatar-img" />
              <h3>{name}</h3>
              <p className="lp-score">{score} | {university}</p>
              <p>{quote}</p>
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

      {/* FACULTY: Humanizes the institute and reinforces mentor credibility. */}
      <section className="lp-section">
        <SectionHeader eyebrow="Faculty" title="Learn with experienced CUET mentors." center />
        <div className="lp-faculty-grid">
          {faculty.map(([name, qualification, experience], index) => (
            <article className="lp-faculty-card" key={name}>
              <PlaceholderImage label={name} tone={index % 2 ? "gold" : "teal"} className="lp-faculty-img" />
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
        <SectionHeader eyebrow="Course plans" title="Choose the preparation plan that fits your goal." center />
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

      {/* FAQ: Removes objections near the bottom of the paid landing page. */}
      <section className="lp-section">
        <SectionHeader eyebrow="FAQ" title="Common questions before joining." />
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
