# Gethyped.nl Clone (Frontend Practice)

A **frontend-only clone** of the landing page experience from **Get Hyped** (social-first content agency), built as a project to **demonstrate and practice frontend skills** (layout, responsiveness, UI state, and micro-interactions).

- **Original site (reference)**: [`https://www.gethyped.nl/`](https://www.gethyped.nl/)
- **Project type**: Clone / UI reproduction (educational, portfolio practice)

> **Disclaimer**: This repository is **not** affiliated with, endorsed by, or connected to Get Hyped. All brand names, logos, and media belong to their respective owners.

---

## Preview

This project recreates a single-page marketing layout with:

- **Fixed navbar** with desktop nav pill + mobile full-screen menu overlay
- **Hero section** with headline and tilted stat/video cards
- **Intro/manifesto** section + CTA
- **Expertises** section with **stacked sticky cards** and looping video thumbnails
- **Work/portfolio** section:
  - Desktop fan layout
  - Mobile snap-scroll carousel
- **Brands** section with an **infinite marquee** (pauses on hover)
- **Footer** with CTA, navigation, social links, and contact details
- **Contact slide-over modal** (client-side “submitted” state)
- **Cookie consent** banner (simple accept/decline UI)

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (dev server + build)
- **Tailwind CSS** (utility-first styling)
- **PostCSS** + **Autoprefixer**

---

## Getting Started

### Prerequisites

- Node.js (recommended: latest LTS)
- npm (comes with Node)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local URL in your terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
```

---

## Project Structure (high level)

```text
src/
  App.tsx                 # Page composition + providers
  index.tsx               # React entry
  tailwind.css            # Tailwind directives + custom utilities (reveal, etc.)

  context/
    UIContext.tsx         # Global UI state (mobile menu, contact modal)

  hooks/
    useInViews.ts         # IntersectionObserver (one-shot reveal)

  data/
    navigation.ts         # Navbar/Footer links
    expertises.ts         # Expertise cards content
    work.ts               # Work/case cards content
    brands.ts             # Brand marquee logos

  sections/
    Navbar/
    Hero/
    IntroSection/
    ExpertiseSection/
    WorkSection/
    BrandSection/
    ContactModal/
    CookieConsent/
    Footer/

  components/ui/
    ArrowIcon.tsx         # Reused arrow-in-pill icon
    Button.tsx            # Reused button component
```

---

## Implementation Notes

- **Single-page + anchor navigation**: Sections use ids like `#expertises`, `#work`, `#contact`.
- **Animations**:
  - CSS utilities (`.reveal`, `.reveal-scale`, delay helpers) live in `src/tailwind.css`
  - `useInViews` triggers in-view animations via IntersectionObserver (one-shot)
- **Media/assets**:
  - The UI uses **external** image/video/icon URLs (mirroring the referenced site’s assets/CDNs).
  - This project intentionally focuses on **frontend implementation**, not building a backend.

---

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production

---

## Credits

- UI/Content reference: **Get Hyped** — [`https://www.gethyped.nl/`](https://www.gethyped.nl/)

