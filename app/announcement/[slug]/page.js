import { notFound } from "next/navigation";
import BlogRenderer from "@/components/blog/BlogRenderer";
import { getAllAnnouncementSlugs, getAnnouncementBySlug } from "@/lib/announcements";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export async function generateStaticParams() {
  return getAllAnnouncementSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);

  if (!announcement) {
    return {};
  }

  const title = announcement.seo?.title || announcement.slug;
  const description = announcement.seo?.description || "";
  const canonical = `${siteUrl}/announcement/${announcement.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function AnnouncementSlugPage({ params }) {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);

  if (!announcement) {
    notFound();
  }

  return (
    <main className="blog-wrapper">
      <article className="blog-body">
        <BlogRenderer blocks={announcement.blocks} />
      </article>
    </main>
  );
}
