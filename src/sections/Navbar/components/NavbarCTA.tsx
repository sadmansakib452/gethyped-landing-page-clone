import React from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { useUI } from "@/context/UIContext";

/**
 * "Get Results" CTA button on the right side of the navbar.
 * Opens the contact modal on click.
 */
export const NavbarCTA: React.FC = () => {
  const { openContact } = useUI();

  return (
    <button
      type="button"
      onClick={openContact}
      className="
        hidden md:inline-flex items-center gap-2
        pl-4 pr-1 py-1 rounded-xl font-semibold text-sm
        bg-fuchsia-300 text-neutral-900
        hover:bg-fuchsia-400 transition-colors shrink-0
      "
    >
      Get Results
      <ArrowIcon bgColor="bg-white" textColor="text-orange-600" />
    </button>
  );
};
