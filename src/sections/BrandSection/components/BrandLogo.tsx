import React from "react";
import { BrandLogoItem } from "@/types";

interface BrandLogoProps {
  brand: BrandLogoItem;
}

/**
 * Single brand logo tile in the scrolling marquee.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ brand }) => {
  return (
    <div className="flex-shrink-0 w-28 md:w-40 aspect-square">
      <div className="relative w-full h-full border border-neutral-900/20 rounded-xl bg-orange-50 overflow-hidden">
        <img
          src={brand.src}
          alt={brand.alt}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </div>
    </div>
  );
};
