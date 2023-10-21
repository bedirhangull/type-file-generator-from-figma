/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,tsx}",
  ],
  theme: {
    fontFamily: {
      vietnam: `'Be Vietnam Pro', sans-serif`,
      roboto: `'Roboto', sans-serif`,
    },
    colors: {
      dark: '#2d2c2c'
    },
    extend: {},
  },
  plugins: [],
};
