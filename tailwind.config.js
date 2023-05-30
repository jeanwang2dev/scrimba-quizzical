/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html',
    "./src/**/*.html", 
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '550px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        primary: '#293264',
        secondary: '#4D5B9E',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

