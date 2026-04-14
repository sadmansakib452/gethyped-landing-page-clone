import React, { useEffect, useRef } from "react";

/**
 * Main headline and subheadline of the hero section.
 * Fade-up animation on load (no IntersectionObserver needed — always visible).
 */
export const HeroText: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  // Hero is always visible on load — trigger reveal after a short delay
  useEffect(() => {
    const delay = (el: HTMLElement | null, ms: number) => {
      if (!el) return;
      setTimeout(() => el.classList.add("in-view"), ms);
    };
    delay(h1Ref.current, 80);
    delay(pRef.current, 220);
  }, []);

  return (
    <div className="flex flex-col gap-4 max-w-3xl mb-6">
      {/* Giant headline */}
      <h1
        ref={h1Ref}
        className="reveal text-5xl md:text-7xl font-semibold tracking-tight leading-none"
      >
        Get Hyped. <br className="hidden md:block" />
        Get Noticed. <br className="hidden md:block" />
        Get Results.
      </h1>

      {/* Subheadline */}
      <p
        ref={pRef}
        className="reveal text-xl md:text-2xl font-semibold tracking-tight max-w-sm"
      >
        Klaar met gokken op content die niets oplevert?
      </p>
    </div>
  );
};
