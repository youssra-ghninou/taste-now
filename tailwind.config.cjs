/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#F72D57',
      'yellow': '#F2BC57',
      'black': '#1E1E1E',
    },
    fontFamily: {
      'praise': ['Praise', 'cursive'],
      'poppins': ['Poppins'],
    },
  },
  plugins: [],
}
