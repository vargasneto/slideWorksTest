/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        leftViolet: { 100: "#726BEA" },
        rightViolet: { 100: "#4F46E5" },
      },
    },
  },
  plugins: [],
};
