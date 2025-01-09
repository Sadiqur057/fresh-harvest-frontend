/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(116,155,63)",
        secondary: "rgb(255,106,26)",
        card: "rgb(244,246,246)",
        heading: "rgb(33,35,55)",
        text: "rgb(74, 74, 82)",
        grey: "rgb(166,166,166)",
      },
    },
  },
  plugins: [],
};
