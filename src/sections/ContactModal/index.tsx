import React, { useEffect } from "react";
import { ContactForm } from "./components/ContactForm";
import { ContactClose } from "./components/ContactClose";
import { useUI } from "@/context/UIContext";

/**
 * Slide-over contact modal that appears from the right.
 * Controlled by UIContext.contactOpen state.
 * Traps scroll while open.
 */
export const ContactModal: React.FC = () => {
  const { contactOpen, closeContact } = useUI();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (contactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [contactOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeContact]);

  if (!contactOpen) return null;

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={closeContact}
        aria-hidden="true"
      />

      {/* ── Slide-over panel ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact formulier"
        className="
          fixed inset-y-0 right-0 z-50
          flex flex-col
          w-full md:w-[520px]
          bg-orange-50 shadow-2xl overflow-y-auto
          animate-[slideIn_0.3s_ease_forwards]
        "
        style={{
          animation: "slideIn 0.3s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        <style>{`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to   { transform: translateX(0); }
          }
        `}</style>

        {/* Close button */}
        <ContactClose />

        {/* Content */}
        <div className="flex flex-col gap-6 flex-1 pt-20 pb-10 px-6 md:px-10">
          {/* Logo mark */}
          <img
            src="https://c.animaapp.com/mnys4enii5TR86/assets/icon-7.svg"
            alt="Get Hyped"
            className="h-10 w-auto self-start"
          />

          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-none">
              Leave us<br /> a message.
            </h2>
            <p className="text-sm text-neutral-500 font-medium">
              We reageren binnen 1 werkdag. Beloofd.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

