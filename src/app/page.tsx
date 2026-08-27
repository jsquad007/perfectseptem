import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const latest = posts[0];

  return (
    <div className="pt-8">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold text-[#e5e2e1] mb-3">
          <span className="text-[#51dbd0]">Perfect Septem</span>
        </h1>
        <p className="text-lg text-[#bbc9c7] max-w-2xl">
          &ldquo;I do not say to you seven times, but seventy times seven.&rdquo; — Matthew 18:22
        </p>
      </section>

      {/* Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Latest Post */}
        <div className="md:col-span-2 bento-card bg-[#2a2a2a] border border-[#3c4948]/20 rounded-xl p-8 flex flex-col justify-between min-h-48">
          <div>
            <span className="material-symbols-outlined text-[#51dbd0] text-4xl mb-3 block">article</span>
            <h3 className="text-2xl font-semibold text-[#e5e2e1]">Latest Post</h3>
            {latest ? (
              <>
                <h4 className="text-[#51dbd0] font-medium mt-2 text-lg">{latest.title}</h4>
                <p className="text-[#bbc9c7] text-sm mt-2 line-clamp-2">{latest.excerpt}</p>
              </>
            ) : (
              <p className="text-[#bbc9c7] text-sm mt-2">No posts yet — check back soon.</p>
            )}
          </div>
          {latest && (
            <Link
              href={`/posts/${latest.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-[#51dbd0] font-bold hover:translate-x-2 transition-transform"
            >
              Read <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          )}
        </div>

        {/* About — large card spans 2 rows */}
        <div className="md:col-span-2 md:row-span-2 bento-card bg-[#201f1f] border border-[#3c4948]/20 rounded-xl overflow-hidden relative group min-h-64">
          {/* Background image — replace src with your own image in /public/images/ */}
          <Image
            src="/images/about-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h3 className="text-2xl font-semibold text-[#e5e2e1] mb-2">About</h3>
            <p className="text-[#bbc9c7] text-sm line-clamp-4">
              Following the intercession of St Joseph in 2021, I experienced God&apos;s help in overcoming
              a struggle with sin. As a result, my faith deepened and my gratitude to God grew stronger.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-2 text-[#51dbd0] font-bold hover:translate-x-2 transition-transform"
            >
              More <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Shop */}
        <div className="md:col-span-2 bento-card bg-[#2a2a2a] border border-[#3c4948]/20 rounded-xl overflow-hidden relative flex flex-col justify-between group min-h-48">
          <Image
            src="/images/shop-bg.png"
            alt=""
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#2a2a2a]/70 z-10" />
          <div className="relative z-20 p-8 flex flex-col justify-between h-full">
          <div>
            <span className="material-symbols-outlined text-[#51dbd0] text-4xl mb-3 block">shopping_bag</span>
            <h3 className="text-2xl font-semibold text-[#e5e2e1]">Shop</h3>
            <p className="text-[#bbc9c7] text-sm mt-2">Inspired by Faith. Worn with Purpose.</p>
          </div>
          <a
            href="https://www.redbubble.com/people/PerfectSeptem/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[#51dbd0] font-bold group-hover:translate-x-2 transition-transform"
          >
            Browse Collection <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          </div>
        </div>

        {/* Gallery */}
        <div className="md:col-span-2 bento-card bg-[#201f1f] border border-[#3c4948]/20 rounded-xl overflow-hidden relative group min-h-48">
          <Image
            src="/images/gallery-bg.png"
            alt=""
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h3 className="text-2xl font-semibold text-[#51dbd0]">Gallery</h3>
            <p className="text-[#bbc9c7] text-sm mt-1">Follow along on Instagram.</p>
            <a
              href="https://www.instagram.com/perfectseptem/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[#51dbd0] font-bold group-hover:translate-x-2 transition-transform"
            >
              Browse Gallery <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Videos */}
        <div className="md:col-span-2 bento-card bg-[#1c1b1b] border border-[#3c4948]/20 rounded-xl overflow-hidden relative flex flex-col justify-between group min-h-48">
          <Image
            src="https://img.youtube.com/vi/XtONSz1Mhqs/maxresdefault.jpg"
            alt=""
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent z-10" />
          <div className="relative z-20 p-8 flex flex-col justify-between h-full">
            <div>
              <span className="material-symbols-outlined text-[#51dbd0] text-4xl mb-3 block">smart_display</span>
              <h3 className="text-2xl font-semibold text-[#e5e2e1]">Videos</h3>
              <p className="text-[#bbc9c7] text-sm mt-2">Faith-filled videos worth watching.</p>
            </div>
            <Link
              href="/videos"
              className="mt-8 inline-flex items-center gap-2 text-[#51dbd0] font-bold group-hover:translate-x-2 transition-transform"
            >
              Watch <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Apps */}
        <div className="md:col-span-2 bento-card bg-[#1c1b1b] border border-[#3c4948]/20 rounded-xl overflow-hidden relative flex flex-col justify-between group min-h-48">
          <Image
            src="/images/app-bg.png"
            alt=""
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent z-10" />
          <div className="relative z-20 p-8 flex flex-col justify-between h-full">
            <div>
              <span className="material-symbols-outlined text-[#51dbd0] text-4xl mb-3 block">widgets</span>
              <h3 className="text-2xl font-semibold text-[#e5e2e1]">Apps</h3>
              <p className="text-[#bbc9c7] text-sm mt-2">A curated list of apps worth using.</p>
            </div>
            <Link
              href="/apps"
              className="mt-8 inline-flex items-center gap-2 text-[#51dbd0] font-bold group-hover:translate-x-2 transition-transform"
            >
              Explore <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-[#3c4948]/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xs font-semibold text-[#ffb599] tracking-widest uppercase">Perfect Septem</span>
          <p className="text-sm text-[#bbc9c7] mt-1">© 2025 Perfect Septem. Sharing the Good News.</p>
        </div>
      </footer>
    </div>
  );
}
