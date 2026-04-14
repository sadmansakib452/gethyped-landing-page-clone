import React from "react";
import { BrandLogo } from "./components/BrandLogo";
import { BRAND_LOGOS } from "@/data/brands";
import { useInView } from "@/hooks/useInViews";

/**
 * "These brands got hyped." section with infinite scrolling logo marquee.
 * Logos are duplicated to create a seamless loop.
 */
export const BrandsSection: React.FC = () => {
  const [headingRef, headingInView] = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Section heading */}
        <div ref={headingRef} className={`mb-10 reveal${headingInView ? " in-view" : ""}`}>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-none">
            These brands got hyped.
          </h2>
        </div>
      </div>

      {/* ── Infinite marquee track (full-bleed, outside padded container) ── */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 md:gap-4 w-max animate-marquee"
          aria-label="Partner brands"
          style={{ willChange: "transform" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
          }}
        >
          {/* Render logos 3 times for a seamless loop on any screen width */}
          {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
            <BrandLogo key={`${brand.alt}-${i}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mt-12 h-px bg-neutral-900/20" />
      </div>
    </section>
  );
};
