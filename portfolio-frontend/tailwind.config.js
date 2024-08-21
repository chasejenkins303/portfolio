/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#13070C',
      mauve: '#6B4D57',
      brown: '#896A67',
      light: '#DDC8C4',
      text: '#EFF9F0'
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

