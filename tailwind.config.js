/** @type {import('tailwindcss').Config} */
export default {
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: ['bg-blue-200','border-blue-600', 'text-blue-800'],
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

