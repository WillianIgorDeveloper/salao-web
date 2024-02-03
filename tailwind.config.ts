import type { Config } from "tailwindcss";

const config = {
  darkMode: [],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#fff3fe",
          100: "#ffe7fd",
          200: "#ffcefd",
          300: "#ffa7f7",
          400: "#ff8df4",
          500: "#f73ee5",
          600: "#db1ec5",
          700: "#b6159f",
          800: "#951381",
          900: "#791667",
          950: "#510143",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-pattern.svg')",
        "brand-gradient-primary": "linear-gradient(160deg, #ff8df4 20%, #db1ec5 77.5%)",
        "brand-gradient-hover": "linear-gradient(160deg, #f73ee5 20%, #b6159f 77.5%)",
        "brand-gradient-active": "linear-gradient(160deg, #db1ec5 20%, #951381 77.5%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
