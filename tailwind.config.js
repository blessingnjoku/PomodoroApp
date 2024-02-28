/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontFamily: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        "pmd-blue-50": "#0000",
        "pmd-blue-100": "#fff",
        "pmd-blue-300": "#ffff",
        "pmd-blue-600": "#000",
        "pmd-blue-800": "#c32021",
        "pmd-blue-900": "#000",
        "pmd-red-600": "#f38a8b",
        "pmd-red-700": "#f87070",
      },

    },
  },
  plugins: [],
};
