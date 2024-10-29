/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./error.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blue-dot": "radial-gradient(circle at 1px 1px, #1B3865 1px, transparent 0)"
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite"
      },
      colors: {
        "imperialBlue" : "#01228F",
        "cetaecanBlue" : "#03123D",
        "azureishWhite": "#D5DFEB",
        "mustardBrown": "#C28100",
        "paleLavender": "#D4D9FF",
        "orangeYellow": "#F0BC1B",
        "ghostWhite2": "#F5F6FF",
        "ghostWhite": "#FAFBFF",
        "seaSerpent": "#5BBAC7",
        "purpleNavy": "#415D82",
        "spaceCadet": "#262D52",
        "shadowBlue": "#787EAB",
        "darkSienna": "#4A1819",
        "aliceBlue": "#F0F2FF",
        "slateGray": "#657D99",
        "eggShell": "#F2ECDC",
      },
    },
  },
  plugins: [],
};
