/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace', 'Roboto Mono'],
      },
      colors: {
        'brutal-white': '#e5e5e5',
        'brutal-black': '#0a0a0a',
        'brutal-gray': '#2a2a2a',
      }
    },
  },
  plugins: [],
}
