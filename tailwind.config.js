const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#e6eedd",
          200: "#ccddbb",
          300: "#b3cd98",
          400: "#99bc76",
          500: "#80ab54",
          600: "#668943",
          700: "#668943",
          800: "#4d6732",
          900: "#334422",
        }
      },
    },
  },
  plugins: [],
};
