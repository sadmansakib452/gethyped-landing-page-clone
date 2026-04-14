import React from "react";
import { NAV_LINKS } from "@/data/navigation";

/**
 * Compact vertical navigation link list shown in the footer grid.
 * Reuses the same NAV_LINKS data as the top navbar.
 */
export const FooterNavLinks: React.FC = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-bold mb-2">Menu</p>
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-neutral-700 hover:text-orange-600 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
