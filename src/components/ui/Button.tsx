import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  /** Visual variant: filled (dark bg) or outlined (border only) */
  variant?: "filled" | "outlined" | "accent";
  className?: string;
}

/**
 * Reusable pill-shaped button used throughout the site.
 * Renders as an <a> when href is provided, otherwise a <button>.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "filled",
  className = "",
}) => {
  const baseClass =
    "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-80 cursor-pointer";

  const variantClass = {
    filled: "bg-neutral-900 text-white",
    outlined: "border border-neutral-900 bg-orange-50 text-neutral-900",
    accent: "bg-fuchsia-300 text-neutral-900",
  }[variant];

  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};
