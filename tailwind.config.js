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
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a1e633",
          500: "#84cc16",
          600: "#a5c639",
          700: "#65a30d",
          800: "#4d7c0f",
          900: "#3f6212",
        },
      },
    },
  },
  plugins: [],
};
