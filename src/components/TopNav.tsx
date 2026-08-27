"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[#131313]/90 backdrop-blur-md border-b border-[#3c4948]/20">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-[#51dbd0] font-semibold text-base">
          <img src="/logo.svg" alt="" className="h-6 w-auto" />
          Perfect Septem
        </Link>
        <div className="flex items-center gap-4">
          <a href="/feed.xml" aria-label="RSS">
            <span className="material-symbols-outlined text-[#51dbd0] text-xl">rss_feed</span>
          </a>
          <a
            href="#"
            aria-label="Email"
            onClick={(e) => { e.preventDefault(); window.location.href = "mailto:" + "perfectseptem" + "@" + "gmail.com"; }}
          >
            <span className="material-symbols-outlined text-[#51dbd0] text-xl">mail</span>
          </a>
        </div>
      </div>
      <nav className="flex overflow-x-auto gap-1 px-4 pb-3 scrollbar-none">
        {NAV.map(({ href, label }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
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
    </header>
  );
}
