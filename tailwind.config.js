/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ['"Luckiest Guy"', "cursive"],
        ubuntu: ['"Ubuntu Mono"'],
      },
      animation: {
        "scroll-horizontal": "scroll-horizontal 25s linear infinite",
        "scroll-vertical": "scrollVertical 40s linear infinite",
        "scroll-vertical-reverse": "scrollVerticalReverse 40s linear infinite",
      },
    },
    colors: {
      white: "#ffffff",
      black: "rgba(0, 0, 0, 1)",
      green: {
        100: "rgba(250, 254, 239, 1)",
        200: "rgba(237, 254, 207, 1)",
        300: "rgba(218, 253, 175, 1)",
        400: "rgba(173, 217, 127, 1)",
        500: "rgba(131, 182, 88, 1)",
      },
      purple: {
        200: "rgba(225, 231, 253, 1)",
        300: "rgba(215, 223, 252, 1)",
        400: "rgba(150, 170, 248, 1)",
        500: "rgba(75, 64, 154, 1)",
      },
    },
  },
  plugins: [],
};
