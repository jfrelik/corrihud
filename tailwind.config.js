module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/airplane-bg.jpg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
