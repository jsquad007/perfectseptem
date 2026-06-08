import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts — Perfect Septem",
  description: "Articles and reflections on the Catholic faith.",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-2">Posts</h1>
      <p className="text-[#bbc9c7] mb-10">Reflections on faith, prayer, and the Catholic life.</p>

      {posts.length === 0 ? (
        <p className="text-[#bbc9c7]">No posts yet — check back soon.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="block bg-[#201f1f] border border-[#3c4948]/20 rounded-xl p-6 hover:bg-[#2a2a2a] hover:-translate-y-1 transition-all duration-300 group"
              >
                <time className="text-xs text-[#869491] font-medium tracking-widest uppercase">
                  {post.date}
                </time>
                <h2 className="text-xl font-semibold text-[#e5e2e1] mt-1 group-hover:text-[#51dbd0] transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-[#bbc9c7] text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
