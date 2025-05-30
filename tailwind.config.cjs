/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#29487D', // Primary
          blueLight: '#D4D8E8', // Light
          blueAlt: '#3C5898', // Alternate
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'Myriad Pro',
          'Helvetica Neue',
          'Gill Sans',
          'Arial',
          'sans-serif',
        ],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}