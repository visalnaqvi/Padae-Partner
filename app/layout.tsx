import { Metadata } from "next";
import Script from "next/script";
import "antd/dist/reset.css";
import "./globals.css";
import AntdProvider from "@/components/AntdProvider";
import NavMenu from "@/components/NavMenu";
import GclidCapture from "@/components/GclidCapture";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://padaepartner.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Padae Partner | CUET UG Coaching and Exam Preparation Guides",
    template: "%s | Padae Partner",
  },
  description:
    "Padae Partner helps students with CUET UG coaching, exam guides, mock tests, study strategies, and practical preparation insights.",
  applicationName: "Padae Partner",
  keywords: [
    "Padae Partner",
    "CUET UG coaching",
    "CUET preparation",
    "CUET online classes",
    "exam preparation guides",
    "study strategy",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Padae Partner | CUET UG Coaching and Exam Preparation Guides",
    description:
      "CUET UG coaching, exam guides, mock tests, study strategies, and practical preparation insights for modern learners.",
    url: "/",
    siteName: "Padae Partner",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Padae Partner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Padae Partner | CUET UG Coaching and Exam Preparation Guides",
    description:
      "CUET UG coaching, exam guides, mock tests, study strategies, and practical preparation insights for modern learners.",
    images: ["/logo.png"],
  },
};

// Site-wide Organization node. Shares its @id with the richer homepage schema
// so search engines treat them as a single entity rather than duplicates.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "Padae Partner",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "CUET UG coaching with online, offline and recorded classes, free mock tests, notes and admission counseling for top central universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) — Google Ads conversion tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18241059929"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18241059929');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <GclidCapture />
        <AntdProvider>
          <NavMenu />
          {children}
          <footer className="footer">
            Copyright 2026 Padae Partner
          </footer>
        </AntdProvider>
      </body>
    </html>
  );
}
