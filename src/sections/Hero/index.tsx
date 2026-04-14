import React from "react";
import { HeroContent } from "./components/HeroContent";

/**
 * Full-width hero header at the top of the homepage.
 */
export const Hero: React.FC = () => {
  return (
    <header className="w-full px-4 md:px-6">
      <div className="max-w-screen-xl mx-auto">
        <HeroContent />
      </div>
    </header>
  );
};
