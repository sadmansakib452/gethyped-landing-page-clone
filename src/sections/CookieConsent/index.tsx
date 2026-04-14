import React, { useState } from "react";

/**
 * Simple GDPR cookie consent banner at the bottom of the page.
 * Disappears once the user accepts or declines.
 */
export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie toestemming"
      className="
        fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm
        z-50 bg-white border border-neutral-200 rounded-2xl shadow-xl
        p-5 flex flex-col gap-3
      "
    >
      <p className="text-sm font-medium leading-relaxed">
        We gebruiken cookies om jouw ervaring te verbeteren. Accepteer je ons
        cookiebeleid?
      </p>

      <div className="flex gap-2">
        {/* Accept */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex-1 py-2 px-4 bg-neutral-900 text-white text-xs font-semibold rounded-lg hover:bg-neutral-700 transition-colors"
        >
          Accepteer alles
        </button>

        {/* Decline */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="flex-1 py-2 px-4 border border-neutral-300 text-xs font-semibold rounded-lg hover:bg-neutral-50 transition-colors"
        >
          Weigeren
        </button>
      </div>
    </div>
  );
};
