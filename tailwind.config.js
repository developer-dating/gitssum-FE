/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        480: "480px",
        572: "572px",
        844: "844px",
      },
      width: {
        1300: "1300px",
        350: "350px",
        390: "390px",
      },
      marginLeft: {
        180: "180px",
        177: "177px",
      },
      fontFamily: {
        SUIT: ["SUIT"],
      },
    },
  },
  plugins: [],
};
