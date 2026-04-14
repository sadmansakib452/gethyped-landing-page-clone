// ─── Shared TypeScript types used across the project ─────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  heading: string;
  description: string;
  href: string;
  linkText: string;
  bgColor: string; // Tailwind bg class for the card
  counterColor: string; // Tailwind text class for the ghost counter
  mediaBgColor: string; // Tailwind bg class for the media pill
  linkBgColor: string; // Tailwind bg class for CTA button
  videoSrc: string;
  counter: string; // "01" | "02" | "03" | "04"
}

export interface WorkItem {
  id: string;
  href: string;
  cardBg: string; // Tailwind bg class for card wrapper
  rotation: string; // Tailwind rotate class
  imgSrc: string;
  imgAlt: string;
  videoSrc: string;
  innerBg: string; // Tailwind bg class for info overlay
  title: string;
  tagBg: string; // Tailwind bg class for brand tag
  tagLabel: string;
  accentColor: string; // Tailwind text class for bottom accent
}

export interface BrandLogoItem {
  src: string;
  alt: string;
}
