import React from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { useUI } from "@/context/UIContext";
import { useInView } from "@/hooks/useInViews";

/**
 * Large "Let's Get Hyped!" call-to-action block inside the footer.
 */
export const FooterCTA: React.FC = () => {
  const { openContact } = useUI();
  const [ref, inView] = useInView<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="flex flex-col items-center gap-6 text-center py-16 md:py-24">
      <h2 className={`reveal text-5xl md:text-7xl font-semibold tracking-tight leading-none${inView ? " in-view" : ""}`}>
        Let&#39;s Get Hyped!
      </h2>

      <div className={`flex flex-wrap items-center justify-center gap-2 reveal reveal-delay-2${inView ? " in-view" : ""}`}>
        {/* Email us */}
        <a
          href="mailto:info@gethyped.nl"
          className="inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-xl font-semibold text-sm border border-neutral-900 hover:bg-neutral-100 transition-colors"
        >
          Mail ons direct
          <ArrowIcon bgColor="bg-neutral-900" textColor="text-white" />
        </a>

        {/* Open contact modal */}
        <button
          type="button"
          onClick={openContact}
          className="inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-xl font-semibold text-sm bg-orange-600 text-white hover:bg-orange-700 transition-colors"
        >
          Get Results
          <ArrowIcon bgColor="bg-white" textColor="text-orange-600" />
        </button>
      </div>
    </div>
  );
};
