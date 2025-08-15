/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f0ff',
          100: '#e8dbff',
          200: '#d0b8ff',
          300: '#b78eff',
          400: '#9d63ff',
          500: '#6610f2', // main company purple
          600: '#580dcf',
          700: '#4a0aad',
          800: '#3c088b',
          900: '#2e0669'
        }
      }
    },
  },
  plugins: [],
}
