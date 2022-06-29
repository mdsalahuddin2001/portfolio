/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        rubik: "'Rubik', sans-serif",
      },
      colors: {
        primary: '#00B1B0',
        secondary: '#FF8370',
        brownWhite: '#EFEBE0',
        darkBlue: '#2B4560',
      },
    },
  },
  plugins: [],
};
