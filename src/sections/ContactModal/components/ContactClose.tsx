import React from "react";
import { useUI } from "@/context/UIContext";

/**
 * "Sluit" (close) button positioned at the top-right of the contact modal.
 */
export const ContactClose: React.FC = () => {
  const { closeContact } = useUI();

  return (
    <button
      type="button"
      onClick={closeContact}
      className="absolute top-5 right-5 md:top-5 md:right-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold text-sm border border-neutral-900 bg-orange-50 hover:bg-neutral-100 z-10 transition-colors"
    >
      Sluit
    </button>
  );
};
