import { transform } from 'typescript';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screen: {
      xs: '370px',
    },
    extend: {
      screens: {
        xxs: '370px',
        xs: '400px',
      },
      colors: {
        primary: '#413B6B',
        white: '#fff',
        black: '#000',
        gray: '#333',
        languageColors: {
          javaScript: '#F0DF47',
          typeScript: '#1976D2',
          html: '#E65100',
        },
      },
      animation: {
        'loop-scroll-rtl': 'loop-scroll-rtl 6s linear infinite',
        'loop-scroll-dtt': 'loop-scroll-dtt 10s linear infinite',
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
  plugins: [],
};
