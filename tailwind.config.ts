import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  prefix: '',
  theme: {

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'fuzzy-wuzzy-brown': {
          50: '#fdf4f3',
          100: '#fbeae8',
          200: '#f6d8d5',
          300: '#eeb9b3',
          400: '#e48f88',
          500: '#d6645d',
          600: '#c74e4e',
          700: '#a22e31',
          800: '#88292e',
          900: '#75262d',
          950: '#401114',
        },
        'scooter': {
          50: '#effcfc',
          100: '#d5f4f8',
          200: '#b1e9f0',
          300: '#7ad7e6',
          400: '#2fb6ce',
          500: '#21a0b9',
          600: '#1f819b',
          700: '#1f687f',
          800: '#225668',
          900: '#204859',
          950: '#102f3c',
        },
        'lightning-yellow': {
          50: '#fffeea',
          100: '#fffcc5',
          200: '#fff887',
          300: '#ffee48',
          400: '#ffe01e',
          500: '#fcc105',
          600: '#df9500',
          700: '#b96a04',
          800: '#96520a',
          900: '#7b430c',
          950: '#472201',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate],
}
