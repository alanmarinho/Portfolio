import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
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
        btnArrow: 'btnArrow 1s linear infinite',
        shine: 'shine 2s',
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
        btnArrow: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-8%)' },
          '50%': { transform: 'translateY(18%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        shine: {
          '0%': { transform: ' background-position: 0% 50%' },
          '50%': { transform: ' background-position: 100% 50%' },
          '100%': { transform: ' background-position: 0% 50%' },
        },
      },
      whitespace: {
        'pre-line': 'pre-line',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
