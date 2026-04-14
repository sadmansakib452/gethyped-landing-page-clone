import React from "react";

/**
 * Contact info block (email, phone, address) in the footer.
 */
export const FooterContact: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Contact details */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold mb-1">Contact</p>
        <a
          href="mailto:info@gethyped.nl"
          className="text-sm font-medium hover:text-orange-600 transition-colors"
        >
          info@gethyped.nl
        </a>
        <a
          href="tel:+31615337496"
          className="text-sm font-medium hover:text-orange-600 transition-colors"
        >
          +31 6 1533 7496
        </a>
      </div>

      {/* Address */}
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold mb-1">Adres</p>
        <address className="text-sm font-medium not-italic leading-relaxed">
          Beltrumsestraat 6,<br />
          7141 AL Groenlo
        </address>
      </div>

      {/* Privacy + copyright */}
      <div className="flex flex-col gap-1 opacity-60 text-xs">
        <a href="#" className="hover:text-orange-600 transition-colors">
          Privacyvoorwaarden
        </a>
      </div>
    </div>
  );
};
