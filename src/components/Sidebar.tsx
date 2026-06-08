"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/posts", label: "Posts", icon: "inventory_2" },
  { href: "/gallery", label: "Gallery", icon: "photo_library" },
  { href: "/shop", label: "Shop", icon: "shopping_bag" },
  { href: "/about", label: "About", icon: "info" },
  { href: "/faq", label: "FAQ", icon: "quiz" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col h-screen p-6 fixed left-0 top-0 w-64 bg-[#131313] border-r border-[#3c4948]/20 z-40">
      <div className="mb-10 mt-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Perfect Septem logo" className="h-8 w-auto" />
          <h2 className="text-2xl font-semibold text-[#51dbd0]">Perfect Septem</h2>
        </div>
        <p className="text-sm text-[#3c4948] mt-1">Sharing the Good News</p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV.map(({ href, label, icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors text-sm font-medium ${
                active
                  ? "bg-[#353534] text-[#51dbd0]"
                  : "text-[#bbc9c7] hover:bg-[#201f1f] hover:text-[#e5e2e1]"
              }`}
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3 pb-4">
        <a
          href="/feed.xml"
          className="flex items-center gap-3 text-[#bbc9c7] hover:text-[#51dbd0] transition-colors text-sm"
        >
          <span className="material-symbols-outlined text-xl">rss_feed</span>
          RSS
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-[#bbc9c7] hover:text-[#51dbd0] transition-colors text-sm"
          onClick={(e) => { e.preventDefault(); window.location.href = "mailto:" + "perfectseptem" + "@" + "gmail.com"; }}
        >
          <span className="material-symbols-outlined text-xl">mail</span>
          perfectseptem AT gmail.com
        </a>
      </div>
    </aside>
  );
}
