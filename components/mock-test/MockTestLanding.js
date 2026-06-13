import Link from "next/link";
import MockTestLauncher from "./MockTestLauncher";

const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

function formatDuration(seconds) {
  const h = Math.floor((seconds || 0) / 3600);
  const m = Math.floor(((seconds || 0) % 3600) / 60);
  if (h > 0) return `${h}h ${m > 0 ? `${m}m` : ""}`.trim();
  if (m > 0) return `${m} min`;
  return `${seconds || 0}s`;
}

// Turn a subcategory label like "Physics Question Paper" into a clean subject name.
function subjectName(label) {
  return (label || "CUET")
    .replace(/\s*question papers?\s*/i, "")
    .replace(/\s*mock tests?\s*/i, "")
    .trim() || "CUET";
}

function buildFaqs(test, subject, qCount) {
  const marks = test.defaultMarks ?? 5;
  const neg = test.defaultNegativeMarks ?? 1;
  const durationLabel = formatDuration(test.duration);
  return [
    {
      q: `How many questions are in the ${test.title}?`,
      a: `This paper has ${qCount} multiple-choice questions${
        test.duration ? ` to be attempted in ${durationLabel}` : ""
      }, following the latest CUET UG pattern.`,
    },
    {
      q: `What is the marking scheme for this CUET ${subject} mock test?`,
      a: `You score +${marks} for every correct answer and ${neg} negative ${
        neg === 1 ? "mark" : "marks"
      } for every wrong answer, just like the official CUET exam.`,
    },
    {
      q: `Is this CUET ${subject} question paper free?`,
      a: `Yes. This ${subject} practice paper is completely free. Attempt it online, get an instant score, and review the correct answer for every question.`,
    },
    {
      q: `Can I see the answers and my score?`,
      a: `After you submit the test you get an instant score with a full breakdown — correct, wrong and skipped — and the correct answer is highlighted for every question.`,
    },
  ];
}

export default function MockTestLanding({ data, siteUrl, canonical }) {
  const { test, categoryLabel, categoryHref, subLabel, subHref, related } = data;
  const questions = test.questions || [];
  const qCount = test.questionCount ?? questions.length;
  const subject = subjectName(subLabel || categoryLabel);
  const durationLabel = formatDuration(test.duration);
  const faqs = buildFaqs(test, subject, qCount);

  // ── Breadcrumb (visual labels + positions) ──
  const crumbs = [
    { name: "Mock Tests", href: "/mock-tests" },
    { name: categoryLabel, href: categoryHref },
    ...(subLabel && subHref ? [{ name: subLabel, href: subHref }] : []),
    { name: test.title, href: null },
  ];

  // ── Structured data ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href ? `${siteUrl}${c.href}` : canonical,
    })),
  };

  const quizSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: test.title,
    url: canonical,
    ...(test.description ? { description: test.description } : {}),
    about: { "@type": "Thing", name: `CUET UG ${subject}` },
    educationalLevel: "CUET UG (undergraduate entrance)",
    assesses: subject,
    hasPart: questions.map((q) => ({
      "@type": "Question",
      eduQuestionType: "Multiple choice",
      text: q.question,
      suggestedAnswer: (q.options || []).map((opt, i) => ({
        "@type": "Answer",
        position: i,
        text: opt,
      })),
      ...(q.options && q.options[q.answer] !== undefined
        ? { acceptedAnswer: { "@type": "Answer", text: q.options[q.answer] } }
        : {}),
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mt-listing-page mt-test-landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, quizSchema, faqSchema]),
        }}
      />

      {/* Breadcrumb */}
      <nav className="mt-breadcrumb" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: "contents" }}>
            {c.href ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
            {i < crumbs.length - 1 && <span aria-hidden="true">›</span>}
          </span>
        ))}
      </nav>

      {/* Hero */}
      <header className="mt-tl-hero">
        <p className="mt-tl-eyebrow">
          CUET UG {subject} · Free Mock Test
        </p>
        <h1 className="mt-tl-title">{test.title}</h1>
        {test.description && <p className="mt-tl-desc">{test.description}</p>}

        <ul className="mt-tl-facts" aria-label="Test details">
          <li><strong>{qCount}</strong> Questions</li>
          {test.duration ? <li><strong>{durationLabel}</strong> Duration</li> : null}
          <li><strong>+{test.defaultMarks ?? 5} / -{test.defaultNegativeMarks ?? 1}</strong> Marking</li>
          <li><strong>Instant</strong> Score &amp; Solutions</li>
        </ul>

        <MockTestLauncher test={test} />
      </header>

      {/* Overview / instructions */}
      <section className="mt-tl-section" aria-label="About this test">
        <h2>About this {subject} mock test</h2>
        <p>
          This free CUET UG {subject} mock test lets you practise {qCount} exam-level
          multiple-choice questions in a real, timed exam environment. Click{" "}
          <strong>Start Test</strong> to begin — the {durationLabel || "timed"} countdown
          starts only when you are ready. Each correct answer adds{" "}
          +{test.defaultMarks ?? 5} marks and each wrong answer carries a{" "}
          {test.defaultNegativeMarks ?? 1}-mark penalty, exactly like the official CUET
          marking scheme. When you submit, you get an instant score with a correct /
          wrong / skipped breakdown and the correct answer for every question.
        </p>
      </section>

      {/* Crawlable question list (answers gated) */}
      {questions.length > 0 && (
        <section className="mt-tl-section mt-tl-questions" aria-label="Questions in this paper">
          <h2>Questions in this {subject} paper</h2>
          <p className="mt-tl-note">
            Preview all {qCount} questions below. Attempt the test to check your answers,
            see your score and review the solution for each question.
          </p>
          <ol className="mt-tl-qlist">
            {questions.map((q, i) => (
              <li className="mt-tl-qitem" key={q.id ?? i}>
                <p className="mt-tl-qtext">{q.question}</p>
                {Array.isArray(q.options) && (
                  <ul className="mt-tl-qoptions">
                    {q.options.map((opt, oi) => (
                      <li key={oi}>
                        <span className="mt-tl-qletter">{OPTION_LETTERS[oi]}</span>
                        {opt}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* FAQ */}
      <section className="mt-tl-section mt-tl-faq" aria-label="Frequently asked questions">
        <h2>Frequently asked questions</h2>
        <div className="mt-tl-faq-list">
          {faqs.map((f) => (
            <details className="mt-tl-faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related tests — internal linking */}
      {related.length > 0 && (
        <section className="mt-tl-section" aria-label="More mock tests">
          <h2>More CUET mock tests</h2>
          <div className="mt-listing-grid">
            {related.map((t) => (
              <Link className="mt-listing-card mt-tl-related-card" href={t.href} key={t.href}>
                <div className="mt-listing-card-body">
                  <p className="mt-listing-card-title">{t.title}</p>
                  <div className="mt-listing-pills">
                    <span className="mt-pill">{t.questionCount} Questions</span>
                    {t.duration ? (
                      <span className="mt-pill">{formatDuration(t.duration)}</span>
                    ) : null}
                  </div>
                </div>
                <span className="mt-category-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
