module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '40vw': '40vw',
      },
      height: {
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '85vh': '85vh',
      },
      lineHeight: {
        16: '4rem',
      },
      textColor: {
        'main-title': '#E3E3E3',
        'vice-title': '#A9A9A9'
      },
      backgroundColor: {
        'dark-card-bg': '#272727',
        'dark-bg': '#121212'
      },
    },
  },
  variants: {},
  plugins: [],
};
