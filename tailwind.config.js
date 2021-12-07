const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/airplane-bg.jpg')"
      },
      colors: {
        yellow: colors.amber,
        sky: colors.sky,
        indigo: colors.indigo,
        blueGray: colors.blueGray
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
