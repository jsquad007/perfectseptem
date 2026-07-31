import type { Metadata } from "next";
import videos from "../../../content/videos.json";

export const metadata: Metadata = {
  title: "Videos — Perfect Septem",
  description: "Faith-filled videos worth watching.",
};

function renderDescription(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#51dbd0] underline underline-offset-2 decoration-[#51dbd0] hover:text-[#72f7ec] hover:decoration-[#72f7ec] transition-colors break-all"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function VideosPage() {
  return (
    <div className="pt-8">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-2">Videos</h1>
      <p className="text-[#bbc9c7] mb-10">Faith-filled videos worth watching.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-[#1c1b1b] border border-[#3c4948]/20 rounded-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-5">
              <h2 className="text-[#e5e2e1] font-semibold text-base leading-snug">{video.title}</h2>
              {video.description && (
                <p className="text-[#bbc9c7] text-sm mt-2 leading-relaxed whitespace-pre-line">
                  {renderDescription(video.description)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
