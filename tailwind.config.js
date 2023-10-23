/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'hind': 'Hind, sans-serif',
      'teko': 'Teko, sans-serif'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#f87171",
        accent: "#38bdf8"
      },
    },
  },
  plugins: [],
}

