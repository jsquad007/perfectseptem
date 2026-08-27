"use client";
import { useState } from "react";
import Image from "next/image";

interface VideoCardProps {
  id: string;
  title: string;
  description?: string;
}

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

export default function VideoCard({ id, title, description }: VideoCardProps) {
  const [active, setActive] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

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
              src={thumbSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setThumbSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)}
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
