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
          "0%": { color: "#b00b1E" }, // Starting color
          "33%": { color: "#b000b5" }, // Midway color
          "66%": { color: "#FF6347" }, // Another color (e.g., tomato)
          "100%": { color: "#b00b1E" }, // Return to starting color
        },
      },
    },
  },
  plugins: [],
};
