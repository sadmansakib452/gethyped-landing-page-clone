import React from "react";
import { UIProvider } from "@/context/UIContext";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { IntroSection } from "@/sections/IntroSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { WorkSection } from "@/sections/WorkSection";
import { BrandsSection } from "@/sections/BrandSection";
import { Footer } from "@/sections/Footer";
import { ContactModal } from "@/sections/ContactModal";
import { CookieConsent } from "@/sections/CookieConsent";

/**
 * Root App component.
 * UIProvider wraps everything to share mobile menu + contact modal state
 * across Navbar, Footer CTA, and the modal itself.
 */
export const App: React.FC = () => {
  return (
    <UIProvider>
      {/* Fixed overlays */}
      <Navbar />
      <ContactModal />
      <CookieConsent />

      {/* Page content */}
      <main className="bg-orange-50 min-h-screen">
        <Hero />
        <IntroSection />
        <ExpertiseSection />
        <WorkSection />
        <BrandsSection />
      </main>

      <Footer />
    </UIProvider>
  );
};
