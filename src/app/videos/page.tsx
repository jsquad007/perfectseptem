import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos — Perfect Septem",
  description: "Faith-filled videos worth watching.",
};

const videos = [
  {
    id: "P-WciLat8tI",
    title: "No.1 Christianity Expert: The Truth About Christianity! The Case For Jesus (Historian's Proof)",
    description: "Wesley Huff discusses the historical case for Jesus and the reliability of the Gospel accounts.",
  },
];

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
                <p className="text-[#bbc9c7] text-sm mt-2 leading-relaxed">{video.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
