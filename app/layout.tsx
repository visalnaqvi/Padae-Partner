import { Metadata } from "next";
import "antd/dist/reset.css";
import "./globals.css";
import AntdProvider from "@/components/AntdProvider";
import NavMenu from "@/components/NavMenu";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
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
