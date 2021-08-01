module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'col-sm': '25%',
        'col-lg': '71%',
      },
    },
    container: {
      screens: {
        sm: '100%',
        md: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  variants: {
    extend: {
      ringOffsetWidth: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      transitionProperty: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      ringColor: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [],
};
