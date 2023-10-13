/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: "767px",
      // => @media (min-width: 767px) { ... }
    },
  },
  plugins: [],
};
