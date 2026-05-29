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
    .sort((a, b) => a.slug.localeCompare(b.slug));
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
