import { notFound } from "next/navigation";
import BlogRenderer from "@/components/blog/BlogRenderer";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  const title = blog.seo?.title || blog.slug;
  const description = blog.seo?.description || "";
  const canonical = `${siteUrl}/blog/${blog.slug}`;

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

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="blog-wrapper">
      <article className="blog-body">
        <BlogRenderer blocks={blog.blocks} />
      </article>
    </main>
  );
}
