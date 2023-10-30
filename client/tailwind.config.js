/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#DCECFF',
          400: '#AED5F9',
          500: '#519BDF',
          700: '#0C66B9',
        },
        gray: {
          500: '#EDEDED',
          600: '#E5E5E5',
          700: '#939393',
        },
        green: {
          200: '#DBF9D8',
        },
      },
    },
  },
};
