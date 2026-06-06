import Link from "next/link";
import { getAllLatestUpdates } from "@/lib/latest-updates";

export const metadata = {
  title: "Latest CUET Updates",
  description:
    "Stay current with the latest CUET UG updates — exam news, syllabus changes, NTA notifications, result updates, and CUET 2027 preparation news from Padae Partner.",
  keywords: [
    "latest CUET updates",
    "CUET 2027 news",
    "CUET UG latest news",
    "NTA CUET updates",
    "CUET exam news",
  ],
  alternates: {
    canonical: "/latest-updates",
  },
  openGraph: {
    title: "Latest CUET Updates | Padae Partner",
    description:
      "Latest CUET UG exam news, syllabus changes, NTA notifications, and result updates.",
    url: "/latest-updates",
    type: "website",
  },
};

export default function LatestUpdatesIndexPage() {
  const updates = getAllLatestUpdates();

  return (
    <main className="home-section">
      <div className="section-heading">
        <h1>Latest Updates</h1>
        <p>Stay current with CUET UG exam news, syllabus changes, NTA notifications, and result updates.</p>
      </div>
      <div className="post-grid">
        {updates.map((update) => (
          <article className="post-card" key={update.slug}>
            <div>
              <div className="post-meta">
                <span>{update.slug}</span>
              </div>
              <h2>{update.seo?.title || update.slug}</h2>
              {update.seo?.description ? <p>{update.seo.description}</p> : null}
            </div>
            <Link className="read-more-link" href={update.href}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
