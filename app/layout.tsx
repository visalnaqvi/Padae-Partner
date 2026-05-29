import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
        <nav className="nav">
          <p className="logo">Padae Partner</p>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/cuet-ug">CUET UG</Link></li>
            <li><Link href="/upsc">UPSC</Link></li>
          </ul>
          <div className="btnWrapper">
            <button className="heroBtn">Login</button>
            <button className="heroBtn">More Info</button>
          </div>
          <div className="btnWrapper2">
            <Link href={"/"}><button className="heroBtn">Home</button></Link>
          </div>
        </nav>
        {children}
        <footer className="footer">
          Copyright 2026 Padae Partner
        </footer>
      </body>
    </html>
  );
}
