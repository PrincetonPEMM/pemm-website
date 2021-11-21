module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Open Sans'],
      'serif': ['Source Sans Pro'],
      'mono': ['Source Sans Pro']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
