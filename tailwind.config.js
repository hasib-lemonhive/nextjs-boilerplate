const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./pages/*.{ts,tsx}', './src/**/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
      container: {
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#1fb6ff',
        secondary: '#7e5bef',
        tertiary: '#d3dce6',
      },
      backgroundImage: {},
      fontSize: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
