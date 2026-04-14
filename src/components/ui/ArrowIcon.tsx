import React from "react";

interface ArrowIconProps {
  /** Tailwind bg color class for the icon circle background */
  bgColor?: string;
  /** Tailwind text color class for the arrow */
  textColor?: string;
  size?: "sm" | "md";
}

/**
 * Arrow icon circle used inside CTA buttons across the site.
 * Renders a simple SVG arrow pointing up-right.
 */
export const ArrowIcon: React.FC<ArrowIconProps> = ({
  bgColor = "bg-neutral-900",
  textColor = "text-white",
  size = "md",
}) => {
  const sizeClass = size === "sm" ? "w-7 h-7" : "w-8 h-8";

  return (
    <span
      className={`flex items-center justify-center shrink-0 rounded-lg ${sizeClass} ${bgColor} ${textColor}`}
    >
      {/* Simple arrow-right SVG icon */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[-45deg]"
      >
        <path
          d="M1 11L11 1M11 1H3M11 1V9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
