/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        gray: {
          900: "#07080c",
          800: "#12141b",
          700: "#1c2029",
          600: "#2a303c",
          500: "#6d6a64",
          400: "#a8a29a",
          300: "#d6d0c6",
        },
        yellow: {
          400: "#f3d37a",
          500: "#d4af37",
          600: "#b8942a",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 12px 40px rgba(212, 175, 55, 0.22)",
        "gold-sm": "0 8px 24px rgba(212, 175, 55, 0.16)",
      },
    },
  },
  plugins: [],
};
