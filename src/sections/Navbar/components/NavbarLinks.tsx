import React from "react";
import { NAV_LINKS } from "@/data/navigation";

interface NavbarLinksProps {
  /** Called when a link is clicked (e.g. to close mobile menu) */
  onLinkClick?: () => void;
}

/**
 * Horizontal nav pill shown on desktop.
 * On mobile this is rendered inside the full-screen menu overlay.
 */
export const NavbarLinks: React.FC<NavbarLinksProps> = ({ onLinkClick }) => {
  return (
    <nav
      aria-label="Hoofdnavigatie"
      className="flex items-center gap-1 bg-white rounded-xl px-1.5 py-1.5 shadow-sm"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onLinkClick}
          className="
            px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-900
            hover:bg-neutral-100 transition-colors
          "
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};
