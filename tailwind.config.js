module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    }, //end of fontFamily
    extend: {
      colors: {
        "primary-red": "#db284e",
        "gray-200": "#cbcbcb",
        "gray-300": "#d8d8d8",
        "gray-400": "#7c7c7c",
        "gray-500": "#c4c4c4",
        "pink-200": "#fddae0",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
};
