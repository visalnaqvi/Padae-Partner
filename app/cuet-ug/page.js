import LeadForm from "@/components/landing/LeadForm";
import SectionHeader from "@/components/landing/SectionHeader";
import { FeatureCard, InfoCard } from "@/components/landing/CardGrid";
import FAQAccordion from "@/components/landing/FAQAccordion";
import PlaceholderImage from "@/components/landing/PlaceholderImage";
import StickyActions from "@/components/landing/StickyActions";
import "./cuet-ug.css";

export function generateMetadata() {
  return {
    title: "CUET UG 2027 Coaching Program | Free Counseling",
    description:
      "Join a conversion-focused CUET UG 2027 preparation program with live classes, mock tests, study material, doubt sessions, and admission counseling for top universities.",
    openGraph: {
      title: "CUET UG 2027 Preparation Program",
      description:
        "Expert CUET UG coaching with live classes, mock tests, PYQs, performance tracking, and free admission counseling.",
      url: "/cuet-ug",
      siteName: "Padae Partner",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "CUET UG 2027 Coaching Program",
      description:
        "Get expert guidance, mock tests, study material, and admission counseling for CUET UG 2027.",
    },
  };
}

const heroPoints = [
  "Live Classes",
  "Mock Tests",
  "Doubt Sessions",
  "Previous Year Questions",
  "College Admission Guidance",
];

const trustCards = [
  ["Experienced Faculty", "Learn from mentors who understand CUET patterns, board overlap, and university admission strategy."],
  ["Structured Study Plan", "Follow a weekly plan designed to cover concepts, revision, tests, and counseling milestones."],
  ["Regular Testing", "Measure readiness with topic tests, full-length mocks, and exam-style practice."],
  ["Personalized Guidance", "Get help choosing subjects, target courses, and university preferences."],
];

const whyMatters = [
  ["Competition is increasing", "More students are targeting CUET every year, making early preparation and test familiarity important."],
  ["Top universities admit through CUET", "CUET scores are a key pathway for Delhi University, BHU, JMI, AMU, and other leading universities."],
  ["Preparation improves chances", "A guided plan helps students avoid random study, identify weak areas, and improve admission options."],
];

const benefits = [
  ["Expert Mentors", "Subject experts simplify concepts and keep preparation focused on CUET requirements."],
  ["Weekly Mock Tests", "Frequent practice builds speed, accuracy, and confidence before the real exam."],
  ["Performance Tracking", "Reports show strengths, weak topics, and the next actions to improve scores."],
  ["Doubt Solving", "Dedicated doubt support helps students stay consistent instead of getting stuck."],
  ["Admission Counseling", "Counselors guide course selection, university targeting, and preference planning."],
  ["Study Material", "Access concise notes, PYQs, topic worksheets, and revision resources."],
];

const features = [
  ["Live Interactive Classes", "Attend concept-first CUET classes with active practice and exam discussion."],
  ["Recorded Sessions", "Revise missed or difficult topics anytime with organized class recordings."],
  ["Topic Wise Tests", "Practice after every unit to strengthen accuracy before moving ahead."],
  ["Full Length Mock Tests", "Experience real exam timing, section strategy, and pressure management."],
  ["Previous Year Questions", "Understand repeated concepts and the style of CUET UG questions."],
  ["Performance Reports", "Track score trends, attempted questions, accuracy, and improvement areas."],
  ["Counseling Support", "Get admission guidance from preparation through university preference filling."],
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
  ["Foundation", "Placeholder pricing", ["Live classes", "Topic tests", "Study material", "Monthly counseling"]],
  ["Premium", "Placeholder pricing", ["Everything in Foundation", "Weekly mocks", "Priority doubt support", "Admission counseling"]],
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
  ["How do I book free counseling?", "Submit any form on this page or use the WhatsApp and call buttons for quick help."],
];

export default function CuetUgLandingPage() {
  return (
    <main className="cuet-landing">
      {/* HERO: Above-the-fold value proposition with immediate lead capture for paid traffic. */}
      <section className="lp-hero" id="lead-form">
        <div className="lp-hero-copy">
          <span className="lp-eyebrow">Admissions-focused CUET coaching</span>
          <h1>CUET UG 2027 Preparation Program</h1>
          <p>
            Get Expert Guidance, Mock Tests, Study Material and Admission Counseling for Top Universities
          </p>
          <div className="lp-hero-points">
            {heroPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
        <LeadForm />
      </section>

      {/* TRUST: Credibility signals placed early to reduce form hesitation. */}
      <section className="lp-section lp-trust-section">
        <div className="lp-trust-grid">
          {trustCards.map(([title, description]) => (
            <InfoCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      {/* WHY CUET MATTERS: Problem framing that validates urgency for the ad visitor. */}
      <section className="lp-section">
        <SectionHeader
          eyebrow="Why CUET matters"
          title="A better CUET score can widen your admission choices."
          description="Students need more than syllabus coverage. They need exam practice, preference planning, and a preparation rhythm that keeps them moving."
        />
        <div className="lp-card-grid lp-three">
          {whyMatters.map(([title, description], index) => (
            <InfoCard key={title} title={title} description={description} tag={`0${index + 1}`} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US: Benefit-led proof points for conversion decision making. */}
      <section className="lp-section lp-soft-band">
        <SectionHeader eyebrow="Why choose us" title="Everything students need to prepare with direction." center />
        <div className="lp-feature-grid">
          {benefits.map(([title, description]) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

      {/* COURSE FEATURES: Detailed offer clarity for high-intent Google Ads users. */}
      <section className="lp-section">
        <SectionHeader
          eyebrow="Course features"
          title="A complete CUET UG preparation system."
          description="From live classes to admission counseling, the program is built to support both score improvement and university planning."
        />
        <div className="lp-feature-grid lp-feature-grid-wide">
          {features.map(([title, description]) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>

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
          cta="Download Free Kit"
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
      </section>

      {/* COURSE PLANS: Simple pricing choice architecture with the premium plan emphasized. */}
      <section className="lp-section lp-soft-band">
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
              <a className="lp-secondary-btn" href="#lead-form">Request pricing</a>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ: Removes objections near the bottom of the paid landing page. */}
      <section className="lp-section">
        <SectionHeader eyebrow="FAQ" title="Common questions before joining." />
        <FAQAccordion faqs={faqs.map(([question, answer]) => ({ question, answer }))} />
      </section>

      {/* FINAL CTA: Last strong conversion point with a complete lead form. */}
      <section className="lp-section lp-final-cta">
        <div>
          <span className="lp-eyebrow">Start with a free call</span>
          <h2>Ready to Start Your CUET UG Preparation?</h2>
          <p>Book a counseling call and get a clear plan for subjects, mock tests, and target universities.</p>
        </div>
        <LeadForm
          title="Book Free Counseling"
          description="A counselor will help you understand the right CUET UG preparation path."
          cta="Book Free Counseling"
          compact
        />
      </section>

      <StickyActions />
    </main>
  );
}
