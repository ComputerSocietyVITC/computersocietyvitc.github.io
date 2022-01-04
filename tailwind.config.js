module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'comsocgreen': '#29DB9B',
        'color1': '#16C79E',
        'color2': '#C5DA45',
        'bgcolor1': '#171717',
        'bgcolor2': '#333b4a',
        'bgcolor3': '#021E22'
      },
      lineHeight: {
        'custom': '3rem',
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
        catamaran: ['Catamaran'],
        montserrat: ['Montserrat']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
