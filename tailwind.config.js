module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
  theme: {
    screens: {},
    extend: {
      screens: {
        "2sm": "414px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1500px",
        "3xl": "1800px",
      },
      colors: {
        picollo: {
          50: '#4E46B4',
        },
        lightPicollo: {
          100: '#F0EDFF'
        },
        ghost: {
          50: '#4E46B41F',
          100: '#4E46B452'
        },
        lightGhost: {
          100: '#F0EDFF'
        },
        hit: {

          50: '#40A69F',
          100: '#4E46B452'
        },
        beerus: {
          50: '#EBEBEB',
          100: '#444444'
        },
        goku: {
          50: '#F5F5F5',
          100: '#0B0B0B',
        },
        gohan: {
          50: '#F5F5F5',
          100: '#1F1F1F',
        },
        bulma: { 50: '#F5F5F5', 100: '#000000' },
        trunks: { 50: '#999CA0', 100: '#999CA0' },
        popo: {},
        krillin: { 50: '#FFB319' },
        chichi: {
          50: '#FF4E64'
        },
        roshi: {
          50: '#4AD15F'
        },
        dodoria: {
          50: '#D33030'
        },
        cell: {
          50: '#95F1D5'
        },
        raditz: { 50: '#B3804A' },
        whiz: {
          50: '#3448F0'
        },
        frieza: {
          50: '#5C33CF'
        },
        nappa: {
          50: '#725550'
        }
      }
    },
  },
  plugins: [ require('tailwindcss-rtl')],
};
