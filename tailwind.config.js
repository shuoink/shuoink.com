module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        right: '0 0 50px rgba(0, 0, 0, 0.5)',
      },
      minHeight: {
        'screen-1/4': '25vh',
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      },
      maxHeight: {
        none: 'none',
      },
      colors: {
        'brand-orange': '#d85118',
        'brand-pink': '#371837',
        'brand-blue': '#050b29',
      },
      flexGrow: {
        2: 2,
        3: 3,
        4: 4,
      },
    },
  },
  variants: {
    extend: {
      translate: ['active'],
    },
  },
  plugins: [],
};
