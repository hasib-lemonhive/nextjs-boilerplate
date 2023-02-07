const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./pages/*.{ts,tsx}', './src/**/**/*.{ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      // TODO: Need update naming
      sans: ['var(--font-roboto)', ...fontFamily.sans],
      inter: ['var(--font-inter)', ...fontFamily.sans],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#1fb6ff',
      'primary-light': '#1fb6ff',
      'primary-dark': '#1fb6ff',
      secondary: '#7e5bef',
      tertiary: '#d3dce6',
      success: '#35B958',
      'success-light': '#6FD189',
      danger: '#EA4335',
      'danger-light': '#FA6B5F',
      warning: '#FBBC05',
      'warning-light': '#FCCB3C',
      black: '#000000',
      'black-light': '#3D434F',
      'black-dark': '#141D2E',
      gray: '#EFF4FA',
      'gray-light': '#F8F9FA',
      'gray-dark': '#FBFBFB',
      white: '#FFFFFF',
    },
    fontSize: {
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.031em',
          fontWeight: '400',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.031em',
          fontWeight: '400',
        },
      ],
      lg: [
        '1.25rem',
        {
          lineHeight: '1.5',
          letterSpacing: '0.031em',
          fontWeight: '500',
        },
      ],
      xl: [
        '1.5rem',
        {
          lineHeight: '1.4',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '1.75rem',
        {
          lineHeight: '1.3',
          fontWeight: '500',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '1.2',
          fontWeight: '600',
        },
      ],
      '4xl': [
        '3rem',
        {
          lineHeight: '1.1',
          fontWeight: '700',
        },
      ],
      '5xl': [
        '5rem',
        {
          lineHeight: '1.2',
          fontWeight: '700',
        },
      ],
    },
    backgroundImage: {
      'primary-gradient':
        'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
      'primary-light-gradient':
        'linear-gradient(86.52deg, #0C5EE8 0.21%, #317AF5 100.21%)',
      'secondary-gradient': 'linear-gradient(180deg, #13A1C5 0%, #16B8E1 100%)',
    },
    boxShadow: {
      1: '0px 11px 20px rgba(12, 94, 232, 0.16)',
    },
    extend: {
      // TODO: need check max-height
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        350: '350ms',
        400: '400ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .4s both',
        fadeInUp: 'fadeInUp .4s both',
        fadeInDown: 'fadeInDown .4s both',
        fadeInLeft: 'fadeInLeft .4s both',
        fadeInRight: 'fadeInRight .4s both',
      },
      borderRadius: {
        5: '.3125rem',
        10: '.625rem',
        20: '1.25rem',
        30: '1.875rem',
        40: '2.5rem',
      },
      zIndex: {
        1: '1',
        99: '99',
        111: '111',
        444: '444',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
