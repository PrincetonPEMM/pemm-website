module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Open Sans'],
      'serif': ['Source Sans Pro'],
      'mono': ['Source Sans Pro']
     },
    colors: {
      'primary': '#3D6F58',
      'secondary': '#E8E4DD',
      'warning': '#EDA545',
      'danger': '#9B3635',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
