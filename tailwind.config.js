const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { ...colors, gem: "#00FF00", specialWhite: "#eeeeeee0" },
    fontFamily: {
      sans: ['Opens Sans', 'sans-serif'],
      serif: ['Playfair', 'serif'],
    },
    extend: {
      backgroundImage: { 'engament': "url('/engament.jpg')" }
    }
  },
  plugins: [],
}
