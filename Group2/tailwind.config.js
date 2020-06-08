const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/screens/**/*.html', './src/index.html', './src/index.js'],
  theme: {
    extend: {
      spacing: {
        '20%': '20%',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
