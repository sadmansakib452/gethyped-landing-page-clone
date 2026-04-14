import React from "react";
import { FooterCTA } from "./components/FooterCTA";
import { FooterNav } from "./components/FooterNav";

/**
 * Full-width footer: "Let's Get Hyped!" CTA + nav/contact columns + copyright.
 */
export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="px-4 md:px-6 bg-stone-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Large CTA */}
        <FooterCTA />

        {/* Divider */}
        <div className="h-px bg-neutral-900/15 mb-8" />

        {/* Nav + contact grid */}
        <FooterNav />

        {/* Bottom padding */}
        <div className="py-6" />
      </div>
    </footer>
  );
};
