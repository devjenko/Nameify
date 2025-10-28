/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.ejs"],
  theme: {
    extend: {
      keyframes: {
        // Marquee animation for category badges
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-142%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear  infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["default", "retro", "cyberpunk", "valentine", "aqua"],
  },
};
