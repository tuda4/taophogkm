const { animate } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{tsx,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
       bounceX: {
       " 0%, 100%": {
          transform: "translateX(-20%)" ,
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
        },
        "50%" : {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
        },
        linearHot: {
          "0%, 100%" : {
            backgroundColor: "bg-orange-300"
          },
          "50%" : {
            backgroundColor: "bg-red-400"
          }
        }
      }},
      animate: {
        bounceX: "bounceX 1s linear infinite",
        linearHot: "linearHot 1s linear infinite",
      }
  },
  plugins: [],
}
}