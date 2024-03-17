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
        'primary': '#0085ff',
        'bg-100': '#1e1e1e',
        'bg-200': '#2d2d2d',
        'text1': '#ececec',
        'text2': '#9e9e9e',
      },

      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

