/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display : "Raleway, sans-serif",
      },
    },
    colors: {
      'white': '#FFF',
      'darkBlue': "#687EFF",
      'blue': "#80B3FF",
      "skyBlue": "#98E4FF",
      "mint": "#B6FFA"
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}