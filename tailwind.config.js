/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        nabhas: {
          50: "#f0f4fa",
          100: "#dfe7f0",
          200: "#b3c9e1",
          300: "#87abd2",
          400: "#5b8dc3",
          500: "#2f6fb4",
          600: "#2d5a99",
          700: "#1a2a5e",
          800: "#16214a",
          900: "#0f1429",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
