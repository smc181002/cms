module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      dropShadow: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
