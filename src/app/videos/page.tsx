import type { Metadata } from "next";
import videos from "../../../content/videos.json";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Videos — Perfect Septem",
  description: "Faith-filled videos worth watching.",
  alternates: { canonical: "/videos" },
};

export default function VideosPage() {
  return (
    <div className="pt-8">
      <h1 className="text-4xl font-bold text-[#e5e2e1] mb-2">Videos</h1>
      <p className="text-[#bbc9c7] mb-10">Faith-filled videos worth watching.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
}
