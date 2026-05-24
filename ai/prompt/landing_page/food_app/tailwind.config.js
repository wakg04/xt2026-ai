/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f3',
          100: '#ffede5',
          200: '#ffd4bf',
          300: '#ffb899',
          400: '#ff9366',
          500: '#FF6B35',
          600: '#e55a2b',
          700: '#cc4a21',
          800: '#a63a17',
          900: '#802b0e',
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 48px rgba(0, 0, 0, 0.06)',
        'orange': '0 8px 30px rgba(255, 107, 53, 0.2)',
        'orange-lg': '0 16px 40px rgba(255, 107, 53, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.75rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
