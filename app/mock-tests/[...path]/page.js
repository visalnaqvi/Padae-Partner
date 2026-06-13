import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCategory,
  getSubcategory,
  getMockTestByPath,
  getTestPageData,
  generateAllPaths,
} from "@/lib/mock-tests";
import MockTestLanding from "@/components/mock-test/MockTestLanding";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export async function generateStaticParams() {
  return generateAllPaths().map((p) => ({ path: p }));
}

export async function generateMetadata({ params }) {
  const { path: segments } = await params;

  // Test page (last segment is a test slug)
  if (segments.length >= 2) {
    const test = getMockTestByPath(segments);
    if (test) {
      const title = `${test.title} | Padae Partner`;
      const description =
        test.description ||
        `Free CUET mock test with ${test.questions?.length ?? 0} questions, instant score and detailed solutions.`;
      const canonical = `${siteUrl}/mock-tests/${segments.join("/")}`;
      return {
        title,
        description,
        alternates: { canonical },
        openGraph: { title, description, url: canonical, type: "website" },
        twitter: { card: "summary", title, description },
      };
    }
  }

  // Subcategory page
  if (segments.length === 2) {
    const sub = getSubcategory(segments[0], segments[1]);
    if (sub) {
      const title = `${sub.label} Mock Tests | Padae Partner`;
      const description =
        sub.description ||
        `Free CUET ${sub.label} mock tests and question papers with instant score, negative marking and solutions.`;
      const canonical = `${siteUrl}${sub.href}`;
      return {
        title,
        description,
        alternates: { canonical },
        openGraph: { title, description, url: canonical, type: "website" },
      };
    }
  }

  // Category page
  if (segments.length === 1) {
    const cat = getCategory(segments[0]);
    if (cat) {
      const title = `${cat.label} Mock Tests | Padae Partner`;
      const description =
        cat.description ||
        `Free ${cat.label} mock tests across every subject with timed practice, instant scoring and detailed solutions.`;
      const canonical = `${siteUrl}${cat.href}`;
      return {
        title,
        description,
        alternates: { canonical },
        openGraph: { title, description, url: canonical, type: "website" },
      };
    }
  }

  return {};
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m > 0 ? `${m}m` : ""}`.trim();
  if (m > 0) return `${m} min`;
  return `${seconds}s`;
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.href ? `${siteUrl}${it.href}` : undefined,
    })),
  };
}

function itemListSchema(name, items) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title || it.label,
      url: `${siteUrl}${it.href}`,
    })),
  };
}

function TestCard({ test }) {
  return (
    <div className="mt-listing-card">
      <div className="mt-listing-card-body">
        <p className="mt-listing-card-title">{test.title}</p>
        {test.description && (
          <p className="mt-listing-card-desc">{test.description}</p>
        )}
        <div className="mt-listing-pills">
          <span className="mt-pill">{test.questionCount} Questions</span>
          {test.duration && (
            <span className="mt-pill">{formatDuration(test.duration)}</span>
          )}
          {test.defaultMarks && (
            <span className="mt-pill mt-pill-accent">
              +{test.defaultMarks} / -{test.defaultNegativeMarks ?? 1}
            </span>
          )}
        </div>
      </div>
      <Link className="mt-start-btn" href={test.href}>
        Open Test →
      </Link>
    </div>
  );
}

function SubcategoryCard({ sub }) {
  return (
    <Link className="mt-category-card" href={sub.href}>
      <span className="mt-category-icon" aria-hidden="true">📝</span>
      <div className="mt-category-body">
        <p className="mt-category-name">{sub.label}</p>
        {sub.description && (
          <p className="mt-category-desc">{sub.description}</p>
        )}
        <div className="mt-category-meta">
          <span className="mt-pill">
            {sub.testCount} Test{sub.testCount !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
      <span className="mt-category-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

export default async function MockTestCatchAllPage({ params }) {
  const { path: segments } = await params;

  // ── 1. Test page (2 or 3 segments, last segment is a test slug) ──
  if (segments.length >= 2) {
    const data = getTestPageData(segments);
    if (data) {
      const canonical = `${siteUrl}/mock-tests/${segments.join("/")}`;
      return <MockTestLanding data={data} siteUrl={siteUrl} canonical={canonical} />;
    }
  }

  // ── 2. Subcategory listing (2 segments, second is a directory) ──
  if (segments.length === 2) {
    const sub = getSubcategory(segments[0], segments[1]);
    if (sub) {
      const crumbs = [
        { name: "Mock Tests", href: "/mock-tests" },
        { name: sub.categoryLabel, href: `/mock-tests/${sub.categorySlug}` },
        { name: sub.label, href: sub.href },
      ];
      const schema = [breadcrumbSchema(crumbs)];
      if (sub.tests.length) {
        schema.push(itemListSchema(`${sub.label} Mock Tests`, sub.tests));
      }
      return (
        <main className="mt-listing-page">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <div className="mt-breadcrumb">
            <Link href="/mock-tests">Mock Tests</Link>
            <span>›</span>
            <Link href={`/mock-tests/${sub.categorySlug}`}>{sub.categoryLabel}</Link>
            <span>›</span>
            <span>{sub.label}</span>
          </div>
          <div className="mt-listing-heading">
            <h1>{sub.label} Mock Tests</h1>
            {sub.description && <p>{sub.description}</p>}
          </div>
          {sub.tests.length === 0 ? (
            <p className="mt-empty-msg">No tests here yet.</p>
          ) : (
            <div className="mt-listing-grid">
              {sub.tests.map((t) => (
                <TestCard key={t.slug} test={t} />
              ))}
            </div>
          )}
        </main>
      );
    }
  }

  // ── 3. Category listing (1 segment) ──
  if (segments.length === 1) {
    const cat = getCategory(segments[0]);
    if (cat) {
      const hasSubcategories = cat.subcategories.length > 0;
      const hasDirectTests = cat.tests.length > 0;
      const crumbs = [
        { name: "Mock Tests", href: "/mock-tests" },
        { name: cat.label, href: cat.href },
      ];
      const schema = [breadcrumbSchema(crumbs)];
      if (hasSubcategories) {
        schema.push(itemListSchema(`${cat.label} Subjects`, cat.subcategories));
      } else if (hasDirectTests) {
        schema.push(itemListSchema(`${cat.label} Mock Tests`, cat.tests));
      }

      return (
        <main className="mt-listing-page">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
          <div className="mt-breadcrumb">
            <Link href="/mock-tests">Mock Tests</Link>
            <span>›</span>
            <span>{cat.label}</span>
          </div>
          <div className="mt-listing-heading">
            <h1>{cat.label}</h1>
            {cat.description && <p>{cat.description}</p>}
          </div>

          {hasSubcategories && (
            <>
              {hasDirectTests && (
                <p className="mt-section-label">Sub-categories</p>
              )}
              <div className="mt-category-grid">
                {cat.subcategories.map((sub) => (
                  <SubcategoryCard key={sub.slug} sub={sub} />
                ))}
              </div>
            </>
          )}

          {hasDirectTests && (
            <>
              {hasSubcategories && (
                <p className="mt-section-label" style={{ marginTop: 32 }}>
                  Tests
                </p>
              )}
              <div className="mt-listing-grid" style={hasSubcategories ? { marginTop: 0 } : {}}>
                {cat.tests.map((t) => (
                  <TestCard key={t.slug} test={t} />
                ))}
              </div>
            </>
          )}

          {!hasSubcategories && !hasDirectTests && (
            <p className="mt-empty-msg">No tests available yet.</p>
          )}
        </main>
      );
    }
  }

  notFound();
}
