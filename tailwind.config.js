/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        viga: ["Viga", "sans-serif"],
      },
      colors: {
        primary: "#fff",
        secondary: "rgba(168, 173, 178, 1)",
        tertiary: "#CACDD0",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 40px))",
        "auto-fill": "repeat(auto-fill, minmax(0, 40px))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 40px))",
        "auto-fill": "repeat(auto-fill, minmax(0, 40px))",
      },
    },
  },
  plugins: [],
};
