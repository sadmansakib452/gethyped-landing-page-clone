import React from "react";
import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroCards } from "./HeroCards";

/**
 * Combined hero content: headline text + stat/video cards.
 */
export const HeroContent: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-6 md:pb-12">
      <HeroText />
      <HeroCards />
    </div>
  );
};
