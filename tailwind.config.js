const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
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
        bad: colors.red,
        good: colors.green,
        info: colors.blue,
        warn: colors.orange,

        gray: colors.coolGray,

        primary: colors.red,
        secondary: colors.coolGray,
        complementary: colors.blue,
      },
      flexGrow: {
        2: 2,
        3: 3,
        4: 4,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      translate: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
