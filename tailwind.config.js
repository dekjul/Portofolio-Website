/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        'primary-100': '#0085ff',
        'bg-200': '#2d2d2d',
        'text-100': '#ececec',
        'text-200': '#9e9e9e',
      },

      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

