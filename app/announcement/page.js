import Link from "next/link";
import { getAllAnnouncements } from "@/lib/announcements";

export const metadata = {
  title: "CUET Announcements",
  description:
    "Latest CUET UG announcements, exam dates, registration updates, NTA notifications, and important news for CUET 2027 aspirants.",
  keywords: [
    "CUET announcement",
    "CUET 2027 exam date",
    "CUET registration date",
    "NTA CUET notification",
    "CUET UG updates",
  ],
  alternates: {
    canonical: "/announcement",
  },
  openGraph: {
    title: "CUET Announcements | Padae Partner",
    description:
      "Latest CUET UG announcements, exam dates, registration updates, and NTA notifications.",
    url: "/announcement",
    type: "website",
  },
};

export default function AnnouncementIndexPage() {
  const announcements = getAllAnnouncements();

  return (
    <main className="home-section">
      <div className="section-heading">
        <h1>Announcements</h1>
        <p>Latest CUET UG exam dates, registration updates, NTA notifications, and important news.</p>
      </div>
      <div className="post-grid">
        {announcements.map((announcement) => (
          <article className="post-card" key={announcement.slug}>
            <div>
              <div className="post-meta">
                <span>{announcement.slug}</span>
              </div>
              <h2>{announcement.seo?.title || announcement.slug}</h2>
              {announcement.seo?.description ? <p>{announcement.seo.description}</p> : null}
            </div>
            <Link className="read-more-link" href={announcement.href}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
