/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './*html', './build/js/*.js'],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%' : { transform: 'scaleY(0)'},
          '80%' : { transform: 'scaleY(1.2)'},
          '100%' : { transform: 'scaleY(1)'},
        }
      },
      colors:{
        primary : '#fbc233',
        secondary_one: '#f8f8f2',
        secondary_two: '#c7ecee',
        secondary_three: '#d1dce0',
        bgcolor: '#222222',
      },
      fontFamily: { poppins: 'Poppins'},
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
