import fs from "fs";
import path from "path";

const latestUpdatesDirectory = path.join(process.cwd(), "content", "latest-updates");

function readLatestUpdateFile(fileName) {
  const fullPath = path.join(latestUpdatesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

function getJsonLatestUpdateFiles() {
  if (!fs.existsSync(latestUpdatesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(latestUpdatesDirectory)
    .filter((fileName) => fileName.endsWith(".json"));
}

function normalizeLatestUpdate(update, fileName) {
  const fileSlug = fileName.replace(/\.json$/, "");
  const slug = update.slug || fileSlug;

  return {
    ...update,
    slug,
    href: `/latest-updates/${slug}`,
  };
}

export function getAllLatestUpdates() {
  return getJsonLatestUpdateFiles()
    .map((fileName) => normalizeLatestUpdate(readLatestUpdateFile(fileName), fileName))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getLatestUpdateBySlug(slug) {
  const safeSlug = slug?.replace(/[^a-zA-Z0-9-]/g, "");

  if (!safeSlug || safeSlug !== slug) {
    return null;
  }

  const fileName = `${safeSlug}.json`;
  const fullPath = path.join(latestUpdatesDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return normalizeLatestUpdate(readLatestUpdateFile(fileName), fileName);
}

export function getAllLatestUpdateSlugs() {
  return getAllLatestUpdates().map((update) => update.slug);
}

// Add updates by creating content/latest-updates/[slug].json only.
// The App Router pages discover JSON files at build time and generate routes.
