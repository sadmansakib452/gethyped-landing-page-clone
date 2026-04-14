import React from "react";
import { FooterNavLinks } from "./FooterNavLinks";
import { FooterSocial } from "./FooterSocial";
import { FooterCopyright } from "./FooterCopyright";
import { FooterContact } from "./FooterContact";

/**
 * Footer navigation column combining nav links, social icons, and copyright.
 */
export const FooterNav: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-10 md:gap-16">
        <FooterNavLinks />
        <FooterSocial />
        <FooterContact />
      </div>
      <FooterCopyright />
    </div>
  );
};
