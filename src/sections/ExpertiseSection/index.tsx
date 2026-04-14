import React from "react";
import { ExpertiseCard } from "./components/ExpertiseCard";
import { EXPERTISES } from "@/data/expertises";
import { useInView } from "@/hooks/useInViews";

/**
 * Expertises section — stacked sticky cards, one per service.
 * Uses CSS sticky positioning so each card "pins" as you scroll.
 */
/** Wrapper that applies a reveal animation to each expertise card. */
const RevealCard: React.FC<{
  item: (typeof EXPERTISES)[number];
  index: number;
}> = ({ item, index }) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.08);
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${Math.min(index + 1, 5) as 1 | 2 | 3 | 4 | 5}${inView ? " in-view" : ""}`}
    >
      <ExpertiseCard item={item} index={index} />
    </div>
  );
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertises" className="px-4 md:px-6 pb-12 md:pb-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Stack of sticky cards */}
        <div className="flex flex-col gap-4 md:gap-6">
          {EXPERTISES.map((item, index) => (
            <RevealCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
