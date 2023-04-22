/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#9499C3",
        green: "#00CF67",
        red: "#EB5757",
        "gray-second": "#242538",
        "icon-active": "#38D9A9",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
