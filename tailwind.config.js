import { transform } from 'typescript';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screen: {
      xs: '370px',
    },
    extend: {
      screens: {
        xxs: '380px',
        xs: '400px',
      },
      colors: {
        primary: '#413B6B',
        secondary: '#9489E4',
        white: '#fff',
        black: '#000',
        gray: '#333',
        languages: {
          typescript: {
            200: '#bfdbfe',
            400: '#60a5fa',
          },
        },
      },
      animation: {
        'loop-scroll-rtl': 'loop-scroll-rtl 5s linear infinite',
        'loop-scroll-dtt': 'loop-scroll-dtt 10s linear infinite',
      },
      transform: {
        'scale-102': 'scale(1.02)',
      },
      keyframes: {
        'loop-scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-201%)' },
        },
        'loop-scroll-dtt': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-104.5%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
