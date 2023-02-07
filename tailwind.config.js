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
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
