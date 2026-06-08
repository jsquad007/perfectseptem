import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Perfect Septem",
  description: "Frequently asked questions about Perfect Septem.",
};

const FAQS = [
  {
    q: "How do I order some bookmarks?",
    a: "Please email me at perfectseptem AT gmail.com and we can arrange something.",
  },
  {
    q: "How much do the bookmarks cost?",
    a: "I am offering these products for free. Delivery fees are at your own expense.",
  },
  {
    q: "How do I order shirts?",
    a: "The shirts are available on Redbubble via the Shop link in the navigation.",
  },
  {
    q: "Can I suggest a topic for a blog post?",
    a: "Absolutely — send me an email at perfectseptem AT gmail.com with your idea.",
  },
  {
    q: "Is there an RSS feed?",
    a: "Yes! Subscribe via the RSS link in the sidebar or at /feed.xml.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-8 max-w-2xl">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-2">FAQ</h1>
      <p className="text-[#bbc9c7] mb-10">Frequently asked questions.</p>

      <dl className="space-y-6">
        {FAQS.map(({ q, a }) => (
          <div
            key={q}
            className="bg-[#201f1f] border border-[#3c4948]/20 rounded-xl p-6"
          >
            <dt className="text-[#e5e2e1] font-semibold">{q}</dt>
            <dd className="text-[#bbc9c7] text-sm mt-2 leading-6">{a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
