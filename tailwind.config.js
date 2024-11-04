/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                     // Include your HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS and JSX files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        corben: ['Corben', 'serif'],
      },
      fontFamily: {
        'avenir-light': ['"Avenir LT W01 35 Light"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

