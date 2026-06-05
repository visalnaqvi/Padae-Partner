import { Metadata } from "next";
import "antd/dist/reset.css";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import AntdProvider from "@/components/AntdProvider";

export const metadata: Metadata = {
  title: "Padae Partner",
  description:
    "Trusted exam guides, study strategies, and practical preparation insights for modern learners.",
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
          <nav className="nav">
            <Link className="nav-brand" href="/" aria-label="Padae Partner home">
              <Image
                className="nav-logo"
                src="/logo.png"
                alt="Padae Partner"
                width={150}
                height={46}
                priority
              />
            </Link>
            <ul className="nav-links" aria-label="Primary navigation">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/cuet-ug-2027-coaching">CUET UG</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </nav>
          {children}
          <footer className="footer">
            Copyright 2026 Padae Partner
          </footer>
        </AntdProvider>
      </body>
    </html>
  );
}
