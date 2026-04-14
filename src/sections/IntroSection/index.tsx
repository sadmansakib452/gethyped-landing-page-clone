import React from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { useInView } from "@/hooks/useInViews";

/**
 * Section below the hero that presents the agency manifesto
 * and a "Leer ons kennen" (learn more about us) CTA.
 */
export const IntroSection: React.FC = () => {
  const [headingRef, headingInView] = useInView<HTMLDivElement>();
  const [copyRef, copyInView] = useInView<HTMLDivElement>(0.1);
  const [imageRef, imageInView] = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6">

          {/* ── Big headline spanning most columns ── */}
          <div
            ref={headingRef}
            className={`md:col-span-10 md:col-start-2 mb-4 md:mb-6 reveal${headingInView ? " in-view" : ""}`}
          >
            <h2 className="text-3xl md:text-6xl font-semibold tracking-tight leading-tight">
              Wij maken content die opvalt. Die blijft hangen. Die jouw
              doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig
              en energiek.
            </h2>
          </div>

          {/* ── Visual: portrait image/video (mobile: hidden, desktop: shown) ── */}
          <div
            ref={imageRef}
            className={`hidden md:block md:col-span-2 md:col-start-2 reveal reveal-delay-2${imageInView ? " in-view" : ""}`}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-orange-100 rotate-3">
              <img
                src="/assets/images/intro-team.webp"
                alt="Team Get Hyped"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

{/* ── Secondary copy + CTA ── */}
          <div
            ref={copyRef}
            className={`md:col-span-4 md:col-start-5 self-end flex flex-col gap-4 reveal reveal-delay-1${copyInView ? " in-view" : ""}`}
          >
            <p className="text-lg md:text-xl font-semibold tracking-tight">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het
              meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer
              content zonder strategie. Nooit meer content zonder resultaat.
            </p>

            {/* CTA button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 self-start pl-4 pr-1 py-1 rounded-xl font-semibold text-sm border border-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Leer ons kennen
              <ArrowIcon bgColor="bg-neutral-900" textColor="text-white" />
            </a>
          </div>

{/* ── Scroll down arrow (desktop only) ── */}
          <div className="hidden md:flex md:col-span-1 md:col-start-11 items-end justify-end self-end">
            <a
              href="#expertises"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Scroll naar expertises"
            >
              <svg className="w-4 h-4 rotate-90" fill="none" viewBox="0 0 16 16">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
