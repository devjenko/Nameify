/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      keyframes: {
        // Marquee animation for category badges
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-51%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear  infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
