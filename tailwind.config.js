/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // Custom animations for background effects
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulse: {
          "0%": { opacity: "0.05", transform: "scale(1)" },
          "50%": { opacity: "0.2", transform: "scale(1.2)" },
          "100%": { opacity: "0.05", transform: "scale(1)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 10s infinite linear",
        "pulse-slow": "pulse 8s infinite ease-in-out",
        "pulse-slower": "pulse 12s infinite ease-in-out",
        "float-slow": "float 15s infinite ease-in-out",
        gradient: "gradient 15s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
