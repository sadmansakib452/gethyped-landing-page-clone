import React, { useRef, useState } from "react";
import { WorkItem } from "@/types";

interface WorkCardProps {
  item: WorkItem;
}

/**
 * Individual case study card in the portfolio section.
 * Shows a looping video with a static image poster while loading.
 */
export const WorkCard: React.FC<WorkCardProps> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <a
      href={item.href}
      aria-label={`Bekijk case: ${item.tagLabel}`}
      className={`
        relative flex-shrink-0
        aspect-[14/18]
        w-[72vw] max-w-[280px] md:w-64 lg:w-72
        overflow-hidden rounded-3xl p-2
        ${item.cardBg} ${item.rotation}
        hover:scale-[1.02] transition-transform duration-300
        shadow-lg
      `}
    >
      {/* ── Media: video with image poster ── */}
      <div className="absolute inset-2 overflow-hidden rounded-2xl bg-neutral-800">
        {/* Poster image — shown until video is ready */}
        <img
          src={item.imgSrc}
          alt={item.imgAlt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-0" : "opacity-100"}`}
        />
        {/* Looping video */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          src={item.videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          onCanPlay={() => setVideoReady(true)}
        />
      </div>

      {/* ── Info overlay at the bottom ── */}
      <div className="absolute bottom-4 inset-x-4 z-10 rounded-b-2xl overflow-hidden">
        {/* Accent bar with arrow icon */}
        <div className={`h-9 ${item.innerBg} relative`}>
          <div className="absolute top-1.5 right-1.5 w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-neutral-900 -rotate-45" fill="none" viewBox="0 0 12 12">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Title + tag */}
        <div className={`${item.innerBg} text-white px-3 pb-3 pt-1 flex flex-col gap-2`}>
          <h3 className="text-base font-semibold tracking-tight leading-snug">
            {item.title}
          </h3>
          <span className={`self-start text-xs font-medium px-2.5 py-1 rounded-md ${item.tagBg} text-neutral-900`}>
            {item.tagLabel}
          </span>
        </div>
      </div>
    </a>
  );
};
