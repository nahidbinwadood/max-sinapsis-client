/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ['Logo'],
        primaryRegular: ['Regular'],
        primaryMedium: ['Medium'],
        primaryBold: ['Bold'],
        primaryLightBold: ['LightBold'],
        primaryTest: ['Test'],
      },
      fontWeight: {
        ultralight: '250',
        bold: '700',
      },
      colors: {
        primary: '#F9F4EE',
        secondary: '#663',
        textColor: '#333',
      },
    },
  },
  plugins: [],
};
