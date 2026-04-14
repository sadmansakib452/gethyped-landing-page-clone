import React, { useState } from "react";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

/**
 * Contact form inside the slide-over modal.
 * Handles local form state and shows a success message on submit.
 */
export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission (replace with real API call)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 flex-1 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Thanks voor je bericht!
        </h2>
        <p className="text-sm leading-relaxed max-w-xs">
          We hebben je bericht ontvangen en komen snel bij je terug. Get ready
          to get hyped 🔥
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 flex-1"
      noValidate
    >
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-neutral-600">
          Voor- en achternaam *
        </label>
        <input
          name="naam"
          type="text"
          required
          placeholder="Wie ben je?"
          className="w-full bg-orange-50 border border-stone-300 rounded-md px-3 py-3 text-sm font-medium focus:outline-none focus:border-neutral-700 transition-colors"
        />
      </div>

{/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-neutral-600">
          E-mail *
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="Hoe kunnen we je bereiken?"
          className="w-full bg-orange-50 border border-stone-300 rounded-md px-3 py-3 text-sm font-medium focus:outline-none focus:border-neutral-700 transition-colors"
        />
      </div>

      {/* Phone (optional) */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between">
          <label className="text-xs font-medium text-neutral-600">Telefoonnummer</label>
          <span className="text-xs opacity-40">Optioneel</span>
        </div>
        <input
          name="telefoon"
          type="tel"
          placeholder="Je telefoonnummer"
          className="w-full bg-orange-50 border border-stone-300 rounded-md px-3 py-3 text-sm font-medium focus:outline-none focus:border-neutral-700 transition-colors"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5 flex-1">
        <label className="text-xs font-medium text-neutral-600">Bericht *</label>
        <textarea
          name="bericht"
          required
          rows={4}
          placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)."
          className="w-full bg-orange-50 border border-stone-300 rounded-md px-3 py-3 text-sm font-medium focus:outline-none focus:border-neutral-700 transition-colors resize-none"
        />
      </div>

{/* Privacy checkbox */}
      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" required className="mt-0.5 accent-orange-600" />
        <span className="text-xs text-stone-500">
          Ik accepteer de{" "}
          <span className="underline hover:text-neutral-800 cursor-pointer">
            Privacyvoorwaarden
          </span>{" "}
          <span className="text-orange-600">*</span>
        </span>
      </label>

      {/* Submit row */}
      <div className="flex flex-wrap items-center gap-4 mt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-xl font-semibold text-sm bg-orange-600 text-white hover:bg-orange-700 transition-colors"
        >
          Verstuur bericht
          <ArrowIcon bgColor="bg-white" textColor="text-orange-600" />
        </button>

        <span className="text-sm font-bold">
          Of bel{" "}
          <a
            href="tel:+31615337496"
            className="text-orange-600 hover:underline"
          >
            +31 6 1533 7496
          </a>
        </span>
      </div>
    </form>
  );
};
