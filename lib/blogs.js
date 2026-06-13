import fs from "fs";
import path from "path";

const blogsDirectory = path.join(process.cwd(), "content", "blogs");

function readBlogFile(fileName) {
  const fullPath = path.join(blogsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

function getJsonBlogFiles() {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogsDirectory)
    .filter((fileName) => fileName.endsWith(".json"));
}

function normalizeBlog(blog, fileName) {
  const fileSlug = fileName.replace(/\.json$/, "");
  const slug = blog.slug || fileSlug;

  return {
    ...blog,
    slug,
    href: `/blog/${slug}`,
  };
}

export function getAllBlogs() {
  return getJsonBlogFiles()
    .map((fileName) => normalizeBlog(readBlogFile(fileName), fileName))
    .filter((blog) => !blog.draft)
    .sort((a, b) => getBlogTimestamp(b) - getBlogTimestamp(a));
}

function getBlogTimestamp(blog) {
  const date = blog.dateModified || blog.datePublished;
  const time = date ? Date.parse(date) : NaN;

  return Number.isNaN(time) ? 0 : time;
}

// First image referenced in the post, used as the social/share + schema image.
export function getBlogImage(blog) {
  if (blog?.seo?.image) {
    return blog.seo.image;
  }

  const imageBlock = (blog?.blocks || []).find(
    (block) => block.type === "image" && block.src
  );

  return imageBlock?.src || null;
}

// On-page H1 lives in the hero block; fall back to the SEO/meta title.
export function getBlogHeadline(blog) {
  const hero = (blog?.blocks || []).find((block) => block.type === "hero");

  return hero?.title || blog?.seo?.title || blog?.slug || "";
}

export function getBlogFaqs(blog) {
  const faqBlock = (blog?.blocks || []).find((block) => block.type === "faq");

  return faqBlock?.items || [];
}

// Meta description: prefer the authored SEO description, else derive one from
// the first real paragraph so no page ships without a description.
export function getBlogDescription(blog) {
  if (blog?.seo?.description) {
    return blog.seo.description;
  }

  const para = (blog?.blocks || []).find(
    (block) => block.type === "paragraph" && block.content
  );
  if (!para) {
    return "";
  }

  const text = para.content
    .replace(/<[^>]+>/g, "")
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
}

function blockToText(block) {
  switch (block.type) {
    case "hero":
      return [block.title, block.subtitle].filter(Boolean).join(" ");
    case "paragraph":
    case "heading":
    case "subheading":
      return block.content || "";
    case "list":
      return (block.items || []).join(" ");
    case "table":
      return [...(block.headers || []), ...(block.rows || []).flat()].join(" ");
    case "faq":
      return (block.items || [])
        .map((item) => `${item.question} ${item.answer}`)
        .join(" ");
    case "cta":
      return block.title || "";
    default:
      return "";
  }
}

export function getBlogReadingMinutes(blog) {
  const words = (blog?.blocks || [])
    .map(blockToText)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 200));
}

export function getBlogBySlug(slug) {
  const safeSlug = slug?.replace(/[^a-zA-Z0-9-]/g, "");

  if (!safeSlug || safeSlug !== slug) {
    return null;
  }

  const fileName = `${safeSlug}.json`;
  const fullPath = path.join(blogsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return normalizeBlog(readBlogFile(fileName), fileName);
}

export function getAllBlogSlugs() {
  return getAllBlogs().map((blog) => blog.slug);
}

// Add future posts by creating content/blogs/[slug].json only.
// The App Router pages discover JSON files at build time and generate routes.
