import React from "react";

/**
 * Copyright and design credit line at the very bottom of the footer.
 */
export const FooterCopyright: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-4 text-xs font-medium opacity-60">
      <span>© 2025 Get Hyped</span>
      <a
        href="https://dylanbrouwer.design/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-600 transition-colors"
      >
        © Design by Dylan
      </a>
    </div>
  );
};
