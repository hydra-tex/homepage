/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      purple: {
        dark: '#170d1e',
        DEFAULT: '#170d1e'
      }
    },
    extend: {}
  },
  plugins: []
}
