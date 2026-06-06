"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/cuet-ug-2027-coaching", label: "CUET UG Coaching" },
  { href: "/blog", label: "Blog" },
  { href: "/announcement", label: "Announcements" },
  { href: "/latest-updates", label: "Latest Updates" },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className={`nav${isOpen ? " nav-open" : ""}`}>
      <div className="nav-row">
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
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav-hamburger${isOpen ? " nav-hamburger-open" : ""}`}
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="nav-drawer"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="nav-drawer" className="nav-drawer" aria-hidden={!isOpen}>
        <ul className="nav-drawer-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-drawer-cta">
          <Link
            className="primary-link"
            href="/cuet-ug-2027-coaching"
            onClick={() => setIsOpen(false)}
          >
            Book Free Counseling
          </Link>
        </div>
      </div>
    </nav>
  );
}
