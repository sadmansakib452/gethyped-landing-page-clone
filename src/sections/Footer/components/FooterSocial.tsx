import React from "react";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gethypednl/",
    icon: "/assets/icons/social-linkedin.svg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gethyped.nl",
    icon: "/assets/icons/social-tiktok.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gethyped.nl/",
    icon: "/assets/icons/social-instagram.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gethypednl",
    icon: "/assets/icons/social-youtube.svg",
  },
];

/**
 * Social media icon links in the footer.
 */
export const FooterSocial: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-bold mb-1">Follow us</p>
      <div className="flex items-center gap-2">
        {SOCIAL_LINKS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
          >
            <img src={s.icon} alt={s.label} className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
};
