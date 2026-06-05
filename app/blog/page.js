import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

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

export default function BlogIndexPage() {
  const blogs = getAllBlogs();

  return (
    <main className="home-section">
      <div className="section-heading">
        <h1>Blog</h1>
        <p>CUET UG preparation guides, exam updates, study strategies, and admission insights.</p>
      </div>
      <div className="post-grid">
        {blogs.map((blog) => (
          <article className="post-card" key={blog.slug}>
            <div>
              <div className="post-meta">
                <span>{blog.slug}</span>
              </div>
              <h2>{blog.seo?.title || blog.slug}</h2>
              {blog.seo?.description ? <p>{blog.seo.description}</p> : null}
            </div>
            <Link className="read-more-link" href={blog.href}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
