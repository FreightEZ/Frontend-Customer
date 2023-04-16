/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#B3DAE3",
      white: "#FFFFFF",
      blue: "#4176B5",
      lightBlue: "FAFEFF",
      red: "#FF0000",
    },
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [require("daisyui")],
};
