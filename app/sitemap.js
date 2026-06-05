import { getAllBlogs } from "@/lib/blogs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export default function sitemap() {
  const now = new Date();
  const routes = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/cuet-ug-2027-coaching`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  const blogRoutes = getAllBlogs().map((blog) => ({
    url: `${siteUrl}${blog.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...routes, ...blogRoutes];
}
