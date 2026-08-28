import Link from "next/link";
import { ICONS } from "@/lib/icons";

export default function NotFound() {
  return (
    <div className="pt-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-4">Page not found</h1>
      <p className="text-[#bbc9c7] leading-7 mb-8">
        This page doesn&apos;t exist — it may have moved, or the link was mistyped.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[#51dbd0] font-bold hover:translate-x-1 transition-transform"
      >
        Back home <span className="material-symbols-outlined">{ICONS.arrow_forward}</span>
      </Link>
    </div>
  );
}
