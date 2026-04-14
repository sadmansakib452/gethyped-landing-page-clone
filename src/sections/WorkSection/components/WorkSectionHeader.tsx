import React from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

/**
 * Header for the work/portfolio section with title, intro copy, and CTA.
 */
export const WorkSectionHeader: React.FC = () => {
  return (
    <div className="max-w-xl flex flex-col gap-4">
      <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
        Content dat scoort.
      </h2>

      <p className="text-xl md:text-2xl font-semibold tracking-tight">
        Wij vertellen jouw verhaal. Op een manier die écht past bij jouw
        doelgroep. Met creatieve content die werkt en het verschil maakt.
      </p>

      <a
        href="#work"
        className="inline-flex items-center gap-2 self-start pl-4 pr-1 py-1 rounded-xl font-semibold text-sm border border-neutral-900 hover:bg-neutral-100 transition-colors"
      >
        Bekijk al ons werk
        <ArrowIcon bgColor="bg-neutral-900" textColor="text-white" />
      </a>
    </div>
  );
};
