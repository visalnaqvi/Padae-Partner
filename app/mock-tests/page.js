import Link from "next/link";
import { getAllCategories } from "@/lib/mock-tests";

export const metadata = {
  title: "CUET Mock Tests | Padae Partner",
  description:
    "Free CUET UG 2027 mock tests with timed practice, instant score, and performance analysis. Pick a category and start practising today.",
  keywords: [
    "CUET mock test",
    "CUET UG mock test 2027",
    "free CUET practice test",
    "CUET general test mock",
    "CUET timed practice",
  ],
  alternates: { canonical: "/mock-tests" },
  openGraph: {
    title: "CUET Mock Tests | Padae Partner",
    description:
      "Free timed CUET UG 2027 mock tests with instant score and performance breakdown.",
    url: "/mock-tests",
    type: "website",
  },
};

const CATEGORY_ICONS = {
  "general-test": "📋",
  english: "📖",
  mathematics: "📐",
  "general-knowledge": "🌍",
  science: "🔬",
  "domain-subjects": "📚",
};

function getCategoryIcon(slug) {
  return CATEGORY_ICONS[slug] || "📝";
}

export default function MockTestsIndexPage() {
  const categories = getAllCategories();

  return (
    <main className="mt-listing-page">
      <div className="mt-listing-heading">
        <h1>CUET Mock Tests</h1>
        <p>
          Choose a category to start practising. Timed tests with instant
          scoring, negative marking, and performance breakdown.
        </p>
      </div>

      {categories.length === 0 ? (
        <p className="mt-empty-msg">No mock tests available yet. Check back soon.</p>
      ) : (
        <div className="mt-category-grid">
          {categories.map((cat) => (
            <Link className="mt-category-card" href={cat.href} key={cat.slug}>
              <span className="mt-category-icon" aria-hidden="true">
                {getCategoryIcon(cat.slug)}
              </span>
              <div className="mt-category-body">
                <p className="mt-category-name">{cat.label}</p>
                {cat.description && (
                  <p className="mt-category-desc">{cat.description}</p>
                )}
                <div className="mt-category-meta">
                  {cat.subcategoryCount > 0 && (
                    <span className="mt-pill">
                      {cat.subcategoryCount} Sub-categor{cat.subcategoryCount === 1 ? "y" : "ies"}
                    </span>
                  )}
                  {cat.testCount > 0 && (
                    <span className="mt-pill">
                      {cat.testCount} Test{cat.testCount !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>
              <span className="mt-category-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
