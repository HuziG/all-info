module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '70vh': '70vh',
        '85vh': '85vh',
      },
      lineHeight: {
        '16': '4rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
