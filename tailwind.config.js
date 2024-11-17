/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"], 
  theme: {
    extend: {
      animation: {
        "text-color-change": "textColorChange 3s infinite linear",
        "image-hue-shift": "hueShift 7s infinite linear",
      },
      keyframes: {
        textColorChange: {
          "0%": { color: "#b00b1E" },
          "17%": { color: "#bada55" },
          "33%": { color: "#b000b5" },
          "50%": { color: "#ab00b5" },
          "66%": { color: "#7166EE" },
          "100%": { color: "#b00b1E" },
        },
        hueShift: {
          "0%": { filter: "hue-rotate(0deg)" }, 
          "100%": { filter: "hue-rotate(360deg)" }, 
        },
      },
    },
  },
  plugins: [],
};
