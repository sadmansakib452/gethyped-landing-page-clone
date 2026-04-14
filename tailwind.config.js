/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        // Primary font matching the original site
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Brand colors extracted from the original site
        brand: {
          cream: "#FFF8F0", // warm off-white background (orange-50)
          orange: "#EA580C", // primary CTA color (orange-600)
          pink: "#E879F9", // accent/highlight (fuchsia-300, navbar pill)
          green: "#34D399", // expertise card 3 (emerald-400)
          blue: "#38BDF8", // expertise card 4 / hero card (sky-500 area)
        },
      },
      keyframes: {
        // Infinite marquee scroll for brand logos
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Fade in from below on page load
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
