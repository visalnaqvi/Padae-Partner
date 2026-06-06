import { notFound } from "next/navigation";
import BlogRenderer from "@/components/blog/BlogRenderer";
import { getAllLatestUpdateSlugs, getLatestUpdateBySlug } from "@/lib/latest-updates";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export async function generateStaticParams() {
  return getAllLatestUpdateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const update = getLatestUpdateBySlug(slug);

  if (!update) {
    return {};
  }

  const title = update.seo?.title || update.slug;
  const description = update.seo?.description || "";
  const canonical = `${siteUrl}/latest-updates/${update.slug}`;

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

export default async function LatestUpdateSlugPage({ params }) {
  const { slug } = await params;
  const update = getLatestUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  return (
    <main className="blog-wrapper">
      <article className="blog-body">
        <BlogRenderer blocks={update.blocks} />
      </article>
    </main>
  );
}
