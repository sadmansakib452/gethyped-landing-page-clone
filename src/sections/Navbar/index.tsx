import React from "react";
import { NavbarLogo } from "./components/NavbarLogo";
import { NavbarLinks } from "./components/NavbarLinks";
import { NavbarCTA } from "./components/NavbarCTA";
import { NavbarMenuButton } from "./components/NavbarMenuButton";
import { NAV_LINKS } from "@/data/navigation";
import { useUI } from "@/context/UIContext";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

/**
 * Fixed top navbar with logo, centered nav pill, CTA, and mobile menu.
 * Stays at the top of the page at all times (fixed positioning).
 */
export const Navbar: React.FC = () => {
  const { mobileMenuOpen, closeMobileMenu, openContact } = useUI();

  return (
    <>
      {/* ── Main navbar bar ───────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-40 px-4 md:px-6">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 md:h-20">
          <NavbarLogo />

          {/* Desktop: centered nav pill */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <NavbarLinks />
          </div>

          {/* Mobile: hamburger | Desktop: CTA */}
          <div className="flex items-center gap-3">
            <NavbarCTA />
            <NavbarMenuButton />
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen menu overlay ───────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-fuchsia-300 flex flex-col items-center justify-center gap-6 md:hidden">
          {/* Nav links (large, vertical) */}
          <nav className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-4xl font-semibold text-neutral-900 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button inside mobile menu */}
          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              openContact();
            }}
            className="inline-flex items-center gap-2 mt-4 pl-4 pr-1 py-1 rounded-xl font-semibold bg-neutral-900 text-white"
          >
            Get Results
            <ArrowIcon bgColor="bg-white" textColor="text-orange-600" />
          </button>
        </div>
      )}
    </>
  );
};
