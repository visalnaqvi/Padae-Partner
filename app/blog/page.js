import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog | Padae Partner",
  description: "Read the latest JSON-powered guides from Padae Partner.",
};

export default function BlogIndexPage() {
  const blogs = getAllBlogs();

  return (
    <main className="home-section">
      <div className="section-heading">
        <h1>Blog</h1>
        <p>Guides, updates, and preparation insights.</p>
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
