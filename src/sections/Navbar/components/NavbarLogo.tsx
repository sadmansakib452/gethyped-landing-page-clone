import React from "react";

/**
 * Get Hyped wordmark logo in the top-left of the navbar.
 * Using a text-based fallback since the SVG asset is external.
 */
export const NavbarLogo: React.FC = () => {
  return (
    <a
      href="/"
      aria-label="Get Hyped – ga naar home"
      className="flex items-center gap-1.5 z-50 shrink-0"
    >
      {/* Local logo asset */}
      <img
        src="/assets/icons/logo-mark.svg"
        alt="Get Hyped logo"
        className="h-10 w-auto"
      />
    </a>
  );
};
