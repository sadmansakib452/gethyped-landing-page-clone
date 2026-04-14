import React, { useEffect, useRef } from "react";

interface HeroCard {
  bgColor: string;
  rotation: string;
  stat?: string;
  label?: string;
  subtitle?: string;
  videoSrc?: string;
  imgSrc?: string;
}

const HERO_CARDS: HeroCard[] = [
  {
    stat: "10M+",
    label: "Organische views",
    subtitle: "Groei door slimme content",
    bgColor: "bg-sky-400",
    rotation: "-rotate-[5deg]",
  },
  {
    videoSrc: "https://gethyped.b-cdn.net/Salontopper/Loop Salontopper.mp4",
    imgSrc: "https://c.animaapp.com/mnys4enii5TR86/assets/69c40296636e683096701cda_video-thumb-01.avif",
    bgColor: "bg-neutral-900",
    rotation: "-rotate-[2deg]",
  },
  {
    stat: "30+",
    label: "Merken geholpen",
    subtitle: "Van start-up tot multinational",
    bgColor: "bg-emerald-400",
    rotation: "rotate-[2deg]",
  },
  {
    videoSrc: "https://gethyped.b-cdn.net/Petrol Head/petrolhead-loop.mp4",
    imgSrc: "https://c.animaapp.com/mnys4enii5TR86/assets/69c402fa5b2a05b98200d317_video-thumb-02.avif",
    bgColor: "bg-fuchsia-300",
    rotation: "rotate-[5deg]",
  },
];

/**
 * Fan of 4 overlapping tilted cards shown below the hero headline.
 * Alternates between stat cards and video thumbnails.
 * Cards stagger-reveal on load.
 */
export const HeroCards: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    HERO_CARDS.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;
      setTimeout(() => el.classList.add("in-view"), 350 + i * 90);
    });
  }, []);

  return (
    <div className="relative flex items-end pt-8 pb-4 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible">
      <div className="flex items-end min-w-max md:min-w-0">
        {HERO_CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`
              reveal-scale
              relative flex-shrink-0
              w-40 md:w-48 lg:w-56
              rounded-2xl md:rounded-3xl overflow-hidden
              ${card.bgColor} ${card.rotation}
              shadow-md
            `}
            style={{
              aspectRatio: "4 / 5.2",
              marginLeft: i === 0 ? "0" : "-2rem",
              zIndex: i + 1,
            }}
          >
          {card.videoSrc ? (
              /* ── Media card ── */
              <>
                {card.imgSrc && (
                  <img
                    src={card.imgSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                <video
                  muted
                  loop
                  playsInline
                  autoPlay
                  src={card.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </>
            ) : ( 
                /* ── Stat card ── */
              <div className="flex flex-col justify-between h-full p-4 md:p-5">
                <span className="text-3xl md:text-5xl font-bold tracking-tight leading-none">
                  {card.stat}
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="text-xs md:text-sm font-semibold leading-tight">
                    {card.label}
                  </p>
                  <div className="h-px w-full bg-current opacity-30" />
                  <p className="text-xs font-medium opacity-80">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 