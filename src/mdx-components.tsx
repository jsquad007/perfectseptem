import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-[#e5e2e1] mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-[#e5e2e1] mt-6 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-[#e5e2e1] mt-5 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-[#bbc9c7] leading-7 mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-[#51dbd0] underline hover:text-[#72f7ec] transition-colors">
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-[#bbc9c7] mb-4 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-[#bbc9c7] mb-4 space-y-1">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#0bb4aa] pl-4 italic text-[#bbc9c7] my-4">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-[#201f1f] text-[#51dbd0] px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[#201f1f] rounded-lg p-4 overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-[#3c4948]/40 my-8" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
