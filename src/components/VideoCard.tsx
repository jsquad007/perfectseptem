"use client";
import { useState } from "react";
import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
  renderDescription: (text: string) => React.ReactNode;
}

export default function VideoCard({ id, title, description, renderDescription }: VideoCardProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="bg-[#1c1b1b] border border-[#3c4948]/20 rounded-xl overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setActive(true)}
            aria-label={`Play ${title}`}
            className="absolute inset-0 w-full h-full group"
          >
            <Image
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Play button overlay */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <span className="w-16 h-16 rounded-full bg-[#131313]/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#51dbd0] ml-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h2 className="text-[#e5e2e1] font-semibold text-base leading-snug">{title}</h2>
        {description && (
          <p className="text-[#bbc9c7] text-sm mt-2 leading-relaxed whitespace-pre-line">
            {renderDescription(description)}
          </p>
        )}
      </div>
    </div>
  );
}
