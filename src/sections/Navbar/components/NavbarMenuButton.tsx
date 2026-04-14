import React from "react";
import { useUI } from "@/context/UIContext";

/**
 * Hamburger button shown on mobile (hidden on desktop).
 * Toggles the full-screen mobile menu overlay.
 */
export const NavbarMenuButton: React.FC = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useUI();

  return (
    <button
      type="button"
      onClick={toggleMobileMenu}
      aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
      aria-expanded={mobileMenuOpen}
      className="
        md:hidden flex flex-col items-center justify-center
        w-11 h-11 rounded-xl bg-fuchsia-300
        transition-colors hover:bg-fuchsia-400 shrink-0
      "
    >
      {/* Animated hamburger lines */}
      <span
        className={`block w-5 h-0.5 bg-neutral-900 transition-transform origin-center ${
          mobileMenuOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-neutral-900 transition-transform origin-center ${
          mobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-1"
        }`}
      />
    </button>
  );
};
