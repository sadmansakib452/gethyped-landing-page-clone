import React from "react";
import { ExpertiseItem } from "@/types";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

interface ExpertiseCardProps {
  item: ExpertiseItem;
  /** Stack index (0–3) used to offset sticky top position */
  index: number;
}

/**
 * Individual expertise card that sticks to the top of the viewport as the
 * user scrolls — each subsequent card overlaps the previous one.
 */
export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ item, index }) => {
  const isWhiteCard = item.bgColor === "bg-white";

  // Each card sticks slightly lower than the last so they visually stack
  const topOffset = `${72 + index * 8}px`;

  return (
    <div className="sticky" style={{ top: topOffset }}>
      <div
        className={`
          relative flex flex-col justify-between overflow-hidden
          rounded-3xl p-6 md:p-10
          min-h-[85vh] md:min-h-[560px]
          ${item.bgColor}
          ${isWhiteCard ? "shadow-md border border-neutral-200" : ""}
        `}
      >
       {/* ── Ghost background counter (decorative) ── */}
        <span
          className={`
            absolute top-0 right-4
            text-[140px] md:text-[220px] font-bold leading-none
            select-none pointer-events-none opacity-50
            ${item.counterColor}
          `}
          aria-hidden="true"
        >
          {item.counter}
        </span>

        {/* ── Top: badge + service title ── */}
        <div className="relative z-10 flex flex-col gap-3">
          <span
            className={`
              self-start text-xs font-semibold px-3 py-1.5 rounded-lg uppercase tracking-wide
              ${isWhiteCard
                ? "bg-neutral-100 text-neutral-500"
                : "bg-black/10 text-neutral-800"}
            `}
          >
            Expertise
          </span>

          <h2 className="text-5xl md:text-8xl font-semibold tracking-tight leading-none">
            {item.title}
          </h2>
        </div>

        {/* ── Floating rotated video thumbnail (right side) ── */}
        <div
          className={`
            absolute right-6 bottom-44 md:right-12 md:bottom-16
            w-32 md:w-48 aspect-[3/4] rounded-2xl overflow-hidden
            rotate-3 z-10 p-1.5 ${item.mediaBgColor}
            shadow-xl
          `}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-200">
            <video
              muted
              loop
              playsInline
              autoPlay
              src={item.videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

{/* ── Bottom: heading, description, CTA ── */}
        <div className="relative z-10 flex flex-col gap-4 max-w-lg">
          <h3 className="text-xl md:text-3xl font-semibold tracking-tight leading-snug">
            {item.heading}
          </h3>
          <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 max-w-sm">
            {item.description}
          </p>

          <a
            href={item.href}
            className={`
              inline-flex items-center gap-2 self-start
              pl-4 pr-1 py-1 rounded-xl font-semibold text-sm
              transition-colors
              ${isWhiteCard
                ? "border border-neutral-900 hover:bg-neutral-100 text-neutral-900"
                : "bg-white/25 hover:bg-white/50 text-neutral-900 border border-white/20"}
            `}
          >
            {item.linkText}
            <ArrowIcon
              bgColor={isWhiteCard ? "bg-neutral-900" : "bg-white"}
              textColor={isWhiteCard ? "text-white" : "text-neutral-900"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};       