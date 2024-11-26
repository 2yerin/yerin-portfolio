/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      // center: true,
      // padding: '1.25rem', //20px
    },
    fontSize: {
      // f10: '0.625rem',
      // f12: '0.75rem',
      // f14: '0.875rem',
    },
    extend: {
      colors: {
        // black: '#000000',
        // strokeBlack: '#2A2A2A',
        // white: '#ffffff',
        // opacityWhite: 'rgba(255, 255, 255, 0.22)',
        // mainColor: '#16efa4',
      },
      spacing: {
        // s6: '0.375rem',
        // s8: '0.5rem',
        // s10: '0.625rem',
        // s12: '0.75rem',
        // s14: '0.875rem',
      },
      fontFamily: {
        pretendard: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
