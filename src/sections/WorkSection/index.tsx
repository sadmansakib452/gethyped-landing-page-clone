import React, { useRef } from "react";
import { WorkSectionHeader } from "./components/WorkSectionHeader";
import { WorkCard } from "./components/WorkCard";
import { WORK_ITEMS } from "@/data/work";
import { useInView } from "@/hooks/useInViews";

/**
 * Portfolio / case studies section.
 * On desktop: 3 cards in a fan layout (center card is raised).
 * On mobile: snap-scroll horizontal carousel with peek on next card.
 */
export const WorkSection: React.FC = () => {
  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.15);
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 md:gap-16">
        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className={`px-4 md:px-6 reveal${headerInView ? " in-view" : ""}`}
        >
          <WorkSectionHeader />
        </div>

        {/* ── MOBILE: snap-scroll horizontal carousel ── */}
        <div
          ref={scrollRef}
          className="
            md:hidden
            flex flex-row gap-4
            overflow-x-auto snap-x snap-mandatory
            px-4 pb-6
            scroll-smooth
            [-webkit-overflow-scrolling:touch]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {WORK_ITEMS.map((item, i) => {
            const delayClass = `reveal-scale reveal-delay-${(i + 1) as 1 | 2 | 3}${cardsInView ? " in-view" : ""}`;
            return (
              <div
                key={item.id}
                className={`snap-center flex-shrink-0 ${delayClass}`}
              >
                <WorkCard item={item} />
              </div>
            );
          })}
          {/* Trailing spacer so last card doesn't sit flush against edge */}
          <div className="flex-shrink-0 w-2" aria-hidden="true" />
        </div>

        {/* ── DESKTOP: fan layout ── */}
        <div
          ref={cardsRef}
          className="hidden md:flex md:flex-row md:items-end md:justify-center gap-4 px-6 pb-4"
        >
          {WORK_ITEMS.map((item, i) => {
            // Middle card raised, outer cards lower — creates fan/arc
            const desktopOffset =
              i === 0 ? "mb-10" : i === 1 ? "mb-0" : "mb-10";
            const delayClass = `reveal-scale reveal-delay-${(i + 1) as 1 | 2 | 3}${cardsInView ? " in-view" : ""}`;
            return (
              <div
                key={item.id}
                className={`flex justify-center ${desktopOffset} ${delayClass}`}
              >
                <WorkCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
