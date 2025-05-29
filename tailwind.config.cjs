/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb', // Primary brand color
          700: '#1d4ed8',
          800: '#162c74',
          900: '#1e3a8a',
          950: '#172554'
        },
        amber: {
          600: '#d97706', // Secondary brand color
        },
        red: {
          600: '#dc2626', // Accent color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}