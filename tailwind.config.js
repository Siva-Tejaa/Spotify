/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1ED760",
      },
    },
    screens: {
      tablet: "481px",
      laptop: "768px",
      desktop: "1024px",
    },
  },
  plugins: [],
  darkMode: "class",
};
