import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "mock-tests");

// "general-test" → "General Test"
export function slugToLabel(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// Optional _meta.json inside a category/subcategory directory
function readDirMeta(dirPath) {
  const metaPath = path.join(dirPath, "_meta.json");
  if (!fs.existsSync(metaPath)) return {};
  try {
    return JSON.parse(fs.readFileSync(metaPath, "utf8"));
  } catch {
    return {};
  }
}

function readTestFile(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function buildTestMeta(filePath, pathSegments) {
  const data = readTestFile(filePath);
  const { questions, ...meta } = data;
  const slug = meta.slug || path.basename(filePath, ".json");
  return {
    ...meta,
    slug,
    href: `/mock-tests/${pathSegments.join("/")}`,
    questionCount: questions?.length ?? 0,
  };
}

// Returns all top-level categories (directories inside content/mock-tests)
export function getAllCategories() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((name) => {
      const p = path.join(CONTENT_DIR, name);
      return fs.statSync(p).isDirectory() && !name.startsWith("_");
    })
    .map((slug) => {
      const dirPath = path.join(CONTENT_DIR, slug);
      const meta = readDirMeta(dirPath);
      const entries = fs.readdirSync(dirPath);
      const subcategories = entries.filter(
        (e) => fs.statSync(path.join(dirPath, e)).isDirectory() && !e.startsWith("_")
      );
      const tests = entries.filter((e) => e.endsWith(".json") && !e.startsWith("_"));
      return {
        slug,
        label: meta.label || slugToLabel(slug),
        description: meta.description || null,
        href: `/mock-tests/${slug}`,
        subcategoryCount: subcategories.length,
        testCount: tests.length,
      };
    });
}

// Get a single category with its subcategories and direct tests
export function getCategory(categorySlug) {
  const safe = categorySlug?.replace(/[^a-zA-Z0-9-]/g, "");
  if (!safe || safe !== categorySlug) return null;
  const dirPath = path.join(CONTENT_DIR, safe);
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return null;

  const meta = readDirMeta(dirPath);
  const entries = fs.readdirSync(dirPath);

  const subcategories = entries
    .filter((e) => fs.statSync(path.join(dirPath, e)).isDirectory() && !e.startsWith("_"))
    .map((subSlug) => {
      const subPath = path.join(dirPath, subSlug);
      const subMeta = readDirMeta(subPath);
      const subTests = fs.readdirSync(subPath).filter((e) => e.endsWith(".json") && !e.startsWith("_"));
      return {
        slug: subSlug,
        label: subMeta.label || slugToLabel(subSlug),
        description: subMeta.description || null,
        href: `/mock-tests/${safe}/${subSlug}`,
        testCount: subTests.length,
      };
    });

  const tests = entries
    .filter((e) => e.endsWith(".json") && !e.startsWith("_"))
    .map((fileName) => {
      const slug = fileName.replace(/\.json$/, "");
      return buildTestMeta(path.join(dirPath, fileName), [safe, slug]);
    });

  return {
    slug: safe,
    label: meta.label || slugToLabel(safe),
    description: meta.description || null,
    href: `/mock-tests/${safe}`,
    subcategories,
    tests,
  };
}

// Get a subcategory with its tests
export function getSubcategory(categorySlug, subcategorySlug) {
  const safeC = categorySlug?.replace(/[^a-zA-Z0-9-]/g, "");
  const safeS = subcategorySlug?.replace(/[^a-zA-Z0-9-]/g, "");
  if (!safeC || !safeS || safeC !== categorySlug || safeS !== subcategorySlug) return null;

  const dirPath = path.join(CONTENT_DIR, safeC, safeS);
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return null;

  const meta = readDirMeta(dirPath);
  const categoryMeta = readDirMeta(path.join(CONTENT_DIR, safeC));
  const tests = fs
    .readdirSync(dirPath)
    .filter((e) => e.endsWith(".json") && !e.startsWith("_"))
    .map((fileName) => {
      const slug = fileName.replace(/\.json$/, "");
      return buildTestMeta(path.join(dirPath, fileName), [safeC, safeS, slug]);
    });

  return {
    slug: safeS,
    label: meta.label || slugToLabel(safeS),
    description: meta.description || null,
    href: `/mock-tests/${safeC}/${safeS}`,
    categorySlug: safeC,
    categoryLabel: categoryMeta.label || slugToLabel(safeC),
    tests,
  };
}

// Get a test with all questions by path segments (2 or 3 segments)
export function getMockTestByPath(segments) {
  if (!segments || segments.length < 2 || segments.length > 3) return null;
  const safe = segments.map((s) => s?.replace(/[^a-zA-Z0-9-]/g, ""));
  if (safe.some((s, i) => !s || s !== segments[i])) return null;

  const filePath = path.join(CONTENT_DIR, ...safe) + ".json";
  if (!fs.existsSync(filePath)) return null;

  const data = readTestFile(filePath);
  return {
    ...data,
    slug: data.slug || safe[safe.length - 1],
    href: `/mock-tests/${safe.join("/")}`,
  };
}

// Bundles everything an individual test landing page needs: the test itself,
// breadcrumb labels, and a list of related tests for internal linking.
export function getTestPageData(segments) {
  const test = getMockTestByPath(segments);
  if (!test) return null;

  const categorySlug = segments[0];
  const category = getCategory(categorySlug);
  const categoryLabel = category?.label || slugToLabel(categorySlug);
  const categoryHref = `/mock-tests/${categorySlug}`;

  let subSlug = null;
  let subLabel = null;
  let subHref = null;
  let related = [];

  if (segments.length === 3) {
    subSlug = segments[1];
    const sub = getSubcategory(categorySlug, subSlug);
    subLabel = sub?.label || slugToLabel(subSlug);
    subHref = sub?.href || `/mock-tests/${categorySlug}/${subSlug}`;
    related = (sub?.tests || []).filter((t) => t.href !== test.href);
  } else {
    related = (category?.tests || []).filter((t) => t.href !== test.href);
  }

  // If this subject has few siblings, pad with the first test from other
  // subjects so every paper links out to more practice.
  if (related.length < 4 && category?.subcategories?.length) {
    for (const other of category.subcategories) {
      if (other.slug === subSlug) continue;
      const os = getSubcategory(categorySlug, other.slug);
      const first = (os?.tests || [])[0];
      if (first) related.push(first);
      if (related.length >= 6) break;
    }
  }

  return {
    test,
    categorySlug,
    categoryLabel,
    categoryHref,
    subSlug,
    subLabel,
    subHref,
    related: related.slice(0, 6),
  };
}

// For generateStaticParams — returns all valid path arrays
export function generateAllPaths() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const paths = [];

  const categories = fs
    .readdirSync(CONTENT_DIR)
    .filter((n) => fs.statSync(path.join(CONTENT_DIR, n)).isDirectory() && !n.startsWith("_"));

  for (const cat of categories) {
    paths.push([cat]);
    const catPath = path.join(CONTENT_DIR, cat);
    const entries = fs.readdirSync(catPath);

    for (const entry of entries) {
      const entryPath = path.join(catPath, entry);
      if (fs.statSync(entryPath).isDirectory() && !entry.startsWith("_")) {
        paths.push([cat, entry]);
        fs.readdirSync(entryPath)
          .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
          .forEach((f) => paths.push([cat, entry, f.replace(/\.json$/, "")]));
      } else if (entry.endsWith(".json") && !entry.startsWith("_")) {
        paths.push([cat, entry.replace(/\.json$/, "")]);
      }
    }
  }

  return paths;
}
