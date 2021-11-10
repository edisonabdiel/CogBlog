module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
    },
    ['responsive']: ['dark"'],
  },
  plugins: [],
}


// try if class and media can be used at the same time in tailwind.config.js