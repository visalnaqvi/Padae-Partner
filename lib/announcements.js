import fs from "fs";
import path from "path";

const announcementsDirectory = path.join(process.cwd(), "content", "announcements");

function readAnnouncementFile(fileName) {
  const fullPath = path.join(announcementsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

function getJsonAnnouncementFiles() {
  if (!fs.existsSync(announcementsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(announcementsDirectory)
    .filter((fileName) => fileName.endsWith(".json"));
}

function normalizeAnnouncement(announcement, fileName) {
  const fileSlug = fileName.replace(/\.json$/, "");
  const slug = announcement.slug || fileSlug;

  return {
    ...announcement,
    slug,
    href: `/announcement/${slug}`,
  };
}

export function getAllAnnouncements() {
  return getJsonAnnouncementFiles()
    .map((fileName) => normalizeAnnouncement(readAnnouncementFile(fileName), fileName))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getAnnouncementBySlug(slug) {
  const safeSlug = slug?.replace(/[^a-zA-Z0-9-]/g, "");

  if (!safeSlug || safeSlug !== slug) {
    return null;
  }

  const fileName = `${safeSlug}.json`;
  const fullPath = path.join(announcementsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return normalizeAnnouncement(readAnnouncementFile(fileName), fileName);
}

export function getAllAnnouncementSlugs() {
  return getAllAnnouncements().map((announcement) => announcement.slug);
}

// Add announcements by creating content/announcements/[slug].json only.
// The App Router pages discover JSON files at build time and generate routes.
