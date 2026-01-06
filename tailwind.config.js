/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E1117", // main background
        surface: "#161B22", // cards / sections
        text: "#E6EDF3", // primary text
        muted: "#9BA3AF", // secondary text
        accent: "#6EE7B7", // buttons / highlights
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // for paragraphs / body
        heading: ["Plus Jakarta Sans", "sans-serifcursive"], // for headings
        cursive: ["Pacifico", "cursive"], // for special cursive text
      },
    },
  },
  plugins: [],
};
