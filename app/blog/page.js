import Link from "next/link";
import { getAllBlogs, getBlogHeadline } from "@/lib/blogs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export const metadata = {
  title: "Education Blog",
  description:
    "Read CUET UG preparation guides, study strategies, exam updates, and practical admission advice from Padae Partner.",
  keywords: [
    "CUET UG blog",
    "CUET preparation tips",
    "exam preparation blog",
    "study strategy",
    "admission guidance",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Education Blog | Padae Partner",
    description:
      "CUET UG preparation guides, study strategies, exam updates, and practical admission advice.",
    url: "/blog",
    type: "website",
  },
};

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
    month: "short",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const blogs = getAllBlogs();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogs.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${blog.href}`,
      name: blog.seo?.title || getBlogHeadline(blog),
    })),
  };

  return (
    <main className="home-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="section-heading">
        <h1>Blog</h1>
        <p>CUET UG preparation guides, exam updates, study strategies, and admission insights.</p>
      </div>
      <div className="post-grid">
        {blogs.map((blog) => {
          const dateLabel = formatDate(blog.dateModified || blog.datePublished);

          return (
            <article className="post-card" key={blog.slug}>
              <div>
                <div className="post-meta">
                  {blog.category ? <span>{blog.category}</span> : <span />}
                  {dateLabel ? <span>{dateLabel}</span> : null}
                </div>
                <h2>
                  <Link href={blog.href}>{blog.seo?.title || getBlogHeadline(blog)}</Link>
                </h2>
                {blog.seo?.description ? <p>{blog.seo.description}</p> : null}
              </div>
              <Link className="read-more-link" href={blog.href}>
                Read More
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
