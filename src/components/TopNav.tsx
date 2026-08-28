"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICONS } from "@/lib/icons";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
  { href: "/videos", label: "Videos" },
  { href: "/apps", label: "Apps" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[#131313]/90 backdrop-blur-md border-b border-[#3c4948]/20">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-[#51dbd0] font-semibold text-base">
          <img src="/logo.svg" alt="" className="h-6 w-auto" />
          Perfect Septem
        </Link>
        <div className="flex items-center gap-4">
          <a href="/feed.xml" aria-label="RSS">
            <span className="material-symbols-outlined text-[#51dbd0] text-xl">{ICONS.rss_feed}</span>
          </a>
          <a
            href="mailto:perfectseptem@gmail.com"
            aria-label="Email"
          >
            <span className="material-symbols-outlined text-[#51dbd0] text-xl">{ICONS.mail}</span>
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-[#51dbd0]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-nav-panel" className="flex flex-col px-4 pb-3">
          {NAV.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${
                  active
                    ? "bg-[#0bb4aa] text-[#003734]"
                    : "text-[#bbc9c7] hover:text-[#51dbd0]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
