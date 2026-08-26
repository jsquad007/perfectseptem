import type { Metadata } from "next";
import apps from "../../../content/apps.json";

export const metadata: Metadata = {
  title: "Apps — Perfect Septem",
  description: "A curated list of apps worth using.",
};

export default function AppsPage() {
  return (
    <div className="pt-8">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-2">Apps</h1>
      <p className="text-[#bbc9c7] mb-10">A curated list of apps worth using.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {apps.map((app) => (
          <div
            key={app.url}
            className="bg-[#1c1b1b] border border-[#3c4948]/20 rounded-xl p-7 flex flex-col gap-5"
          >
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#51dbd0] text-3xl flex-shrink-0 mt-0.5">
                {app.icon}
              </span>
              <div>
                <h2 className="text-[#e5e2e1] font-semibold text-xl leading-snug">{app.name}</h2>
                <p className="text-[#51dbd0] text-sm font-medium mt-0.5">{app.tagline}</p>
              </div>
            </div>

            <p className="text-[#bbc9c7] text-sm leading-relaxed">{app.description}</p>

            {app.features && app.features.length > 0 && (
              <ul className="space-y-2">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[#bbc9c7]">
                    <span className="material-symbols-outlined text-[#51dbd0] text-base flex-shrink-0 mt-0.5">
                      check
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-[#51dbd0] font-bold hover:translate-x-1 transition-transform text-sm"
            >
              Open App <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
