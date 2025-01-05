/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#171941",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        blinker: ["Blinker", "sans-serif"],
        comicneue: ["Comic Neue", "sans-serif"],
        manga: ["Bangers", "sans-serif"],
      },
    },
  },
  plugins: [],
};
