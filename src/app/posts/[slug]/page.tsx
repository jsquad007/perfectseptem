import { getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function getPost(slug: string) {
  const extensions = ["mdx", "md"];
  for (const ext of extensions) {
    const filePath = path.join(process.cwd(), "content", "posts", `${slug}.${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return { slug, meta: data };
    }
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title ?? slug} — Perfect Septem`,
    description: post.meta.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  // Dynamic import of the MDX file
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let PostContent: React.ComponentType<any>;
  try {
    const mod = await import(`../../../../content/posts/${slug}.mdx`);
    PostContent = mod.default;
  } catch {
    try {
      const mod = await import(`../../../../content/posts/${slug}.md`);
      PostContent = mod.default;
    } catch {
      notFound();
    }
  }

  return (
    <article className="pt-8 max-w-2xl">
      <header className="mb-10">
        {post.meta.date && (
          <time className="text-xs text-[#869491] font-medium tracking-widest uppercase">
            {String(post.meta.date)}
          </time>
        )}
        <h1 className="text-4xl font-bold text-[#e5e2e1] mt-2">
          {post.meta.title ?? slug}
        </h1>
        {post.meta.excerpt && (
          <p className="text-[#bbc9c7] text-lg mt-3">{post.meta.excerpt}</p>
        )}
        <div className="mt-6 h-px bg-[#3c4948]/30" />
      </header>

      <div className="prose-content">
        <PostContent />
      </div>
    </article>
  );
}
