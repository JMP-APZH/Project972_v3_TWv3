
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: (theme) => ({
        'wave-img': "url('assets/wave2.png')",
      }),
      colors: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.neutral,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',  
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
