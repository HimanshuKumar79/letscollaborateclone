/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto-Sans", "sans-serif"],
      },
      keyframes: {
        move: {
          "0%": { transform: "translate(30px)", opacity: 0 },
          "100%": { transform: "translate(0px)", opacity: 1 },
        },
      },

      animation: {
        arrowmove: "move 260ms linear 1",
      },
    },
  },
  plugins: [],
};
