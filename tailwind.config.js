/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // allows dark mode with class="dark"
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#0a0a0a",
        },
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        },
        purple: {
          600: '#7c3aed',
        },
        blue: {
          600: '#2563eb',
        },
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        bgShift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '1000px 1000px' },
        },
        pulseNoise: {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.1' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 15s linear infinite',
        bgShift: 'bgShift 20s linear infinite',
        pulseNoise: 'pulseNoise 10s linear infinite',
      },
    },
  },
  plugins: [],
};
