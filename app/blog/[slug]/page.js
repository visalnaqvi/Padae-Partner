import Link from "next/link";
import { notFound } from "next/navigation";
import BlogRenderer from "@/components/blog/BlogRenderer";
import {
  getAllBlogs,
  getAllBlogSlugs,
  getBlogBySlug,
  getBlogFaqs,
  getBlogHeadline,
  getBlogImage,
  getBlogReadingMinutes,
} from "@/lib/blogs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

const DEFAULT_AUTHOR = {
  name: "Padae Partner Academic Team",
  url: siteUrl,
};

function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) {
    return null;
  }

  return pathOrUrl.startsWith("http") ? pathOrUrl : `${siteUrl}${pathOrUrl}`;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  const title = blog.seo?.title || getBlogHeadline(blog);
  const description = blog.seo?.description || "";
  const canonical = `${siteUrl}/blog/${blog.slug}`;
  const author = blog.author?.name || DEFAULT_AUTHOR.name;
  const image = absoluteUrl(getBlogImage(blog));
  const ogImages = image ? [{ url: image, alt: title }] : undefined;

  return {
    title,
    description,
    keywords: blog.seo?.keywords,
    authors: [{ name: author }],
    alternates: {
      canonical,
    },
    robots: blog.draft
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "Padae Partner",
      locale: "en_IN",
      images: ogImages,
      publishedTime: blog.datePublished,
      modifiedTime: blog.dateModified || blog.datePublished,
      authors: [author],
      section: blog.category,
      tags: blog.seo?.keywords,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

function buildJsonLd(blog) {
  const canonical = `${siteUrl}/blog/${blog.slug}`;
  const headline = getBlogHeadline(blog);
  const image = absoluteUrl(getBlogImage(blog));
  const author = blog.author || DEFAULT_AUTHOR;
  const published = blog.datePublished;
  const modified = blog.dateModified || blog.datePublished;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    headline,
    description: blog.seo?.description,
    image: image ? [image] : undefined,
    datePublished: published,
    dateModified: modified,
    author: {
      "@type": author.url ? "Organization" : "Person",
      name: author.name,
      url: author.url,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Padae Partner",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    keywords: blog.seo?.keywords?.join(", "),
    articleSection: blog.category,
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: headline,
        item: canonical,
      },
    ],
  };

  const faqs = getBlogFaqs(blog);
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return [articleSchema, breadcrumbSchema, faqSchema].filter(Boolean);
}

function formatDate(value) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = buildJsonLd(blog);
  const readingMinutes = getBlogReadingMinutes(blog);
  const updatedLabel = formatDate(blog.dateModified || blog.datePublished);
  const author = blog.author?.name || DEFAULT_AUTHOR.name;

  // Enrich the hero block with byline/freshness signals shown under the H1.
  const blocks = blog.blocks.map((block) =>
    block.type === "hero"
      ? { ...block, meta: { author, updatedLabel, readingMinutes } }
      : block
  );

  const related = getAllBlogs()
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className="blog-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="blog-body">
        <nav className="blog-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{getBlogHeadline(blog)}</span>
        </nav>
        <BlogRenderer blocks={blocks} />
        {related.length ? (
          <section className="blog-related" aria-label="Related articles">
            <h2 className="sub-headings">Related Articles</h2>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={item.href}>
                    {item.seo?.title || getBlogHeadline(item)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cuet-ug-2027-coaching">
                  CUET UG 2027 Coaching — Online &amp; Offline Classes
                </Link>
              </li>
            </ul>
          </section>
        ) : null}
      </article>
    </main>
  );
}
