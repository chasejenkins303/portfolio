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
      animation: {
        float: 'float 3s ease-in-out infinite',
        gradient: 'gradientShift 10s ease infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        spinSlow: 'spinSlow 20s linear infinite',
        wave: 'wave 5s ease-in-out infinite alternate',
      },
      keyframes: { 
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" }
        } 
      }
    },
  },
  plugins: [],
}

