import { getAllBlogs } from "@/lib/blogs";
import { getAllAnnouncements } from "@/lib/announcements";
import { getAllLatestUpdates } from "@/lib/latest-updates";
import { generateAllPaths } from "@/lib/mock-tests";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

const now = new Date();

// Shape a single sitemap entry. `path` is appended to siteUrl ("" for the homepage).
function entry(path, { lastModified = now, changeFrequency = "weekly", priority = 0.7 } = {}) {
  return {
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

// Use the content's modified/published date when present, else fall back to now.
function contentDate(item) {
  const modified = item.dateModified || item.datePublished;
  const date = modified ? new Date(modified) : now;

  return Number.isNaN(date.getTime()) ? now : date;
}

export default function sitemap() {
  // Static, hand-maintained routes (landing/index pages).
  const staticRoutes = [
    entry("", { priority: 1 }),
    entry("/cuet-ug-2027-coaching", { priority: 0.95 }),
    entry("/cuet-ug-2027-coaching/online-coaching", { priority: 0.9 }),
    entry("/cuet-ug-2027-coaching/offline-coaching", { priority: 0.9 }),
    entry("/blog", { priority: 0.75 }),
    entry("/announcement", { priority: 0.75 }),
    entry("/latest-updates", { priority: 0.75 }),
    entry("/mock-tests", { priority: 0.8 }),
    entry("/mock-tests/details", { priority: 0.7 }),
  ];

  // Content-derived routes — auto-discovered from content/*. Add a JSON file and it
  // shows up here on the next build; nothing to update by hand.
  const blogRoutes = getAllBlogs().map((blog) =>
    entry(blog.href, { lastModified: contentDate(blog), changeFrequency: "monthly", priority: 0.65 })
  );

  const announcementRoutes = getAllAnnouncements().map((item) =>
    entry(item.href, { changeFrequency: "monthly", priority: 0.6 })
  );

  const latestUpdateRoutes = getAllLatestUpdates().map((item) =>
    entry(item.href, { changeFrequency: "monthly", priority: 0.6 })
  );

  // generateAllPaths() returns every valid mock-test path array: categories,
  // subcategories, and individual tests. Deeper paths are lower priority.
  const mockTestRoutes = generateAllPaths().map((segments) =>
    entry(`/mock-tests/${segments.join("/")}`, {
      changeFrequency: "monthly",
      priority: segments.length >= 3 ? 0.6 : 0.7,
    })
  );

  return [
    ...staticRoutes,
    ...blogRoutes,
    ...announcementRoutes,
    ...latestUpdateRoutes,
    ...mockTestRoutes,
  ];
}
