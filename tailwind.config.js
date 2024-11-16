/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*[.js,.jsx]"],
  theme: {
    extend: {
      animation: {
        "text-color-change": "textColorChange 3s infinite linear",
      },
      keyframes: {
        textColorChange: {
          "0%": { color: "#b00b1E" },
          "17%": { color: "#bada55" },
          "33%": { color: "#b000b5" },
          "50%": { color: "#b060b5" },
          "66%": { color: "#FF6347" },
          "100%": { color: "#b00b1E" },
        },
      },
    },
  },
  plugins: [],
};
