import React, { createContext, useContext, useState } from "react";

interface UIContextValue {
  /** Whether the mobile hamburger menu is open */
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  /** Whether the contact slide-over modal is open */
  contactOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const UIContext = createContext<UIContextValue | null>(null);

/** Wraps the entire app to provide global UI state (menu, modal). */
export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        mobileMenuOpen,
        toggleMobileMenu: () => setMobileMenuOpen((v) => !v),
        closeMobileMenu: () => setMobileMenuOpen(false),
        contactOpen,
        openContact: () => setContactOpen(true),
        closeContact: () => setContactOpen(false),
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

/** Hook to access global UI state. Throws if used outside UIProvider. */
export const useUI = (): UIContextValue => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
};
