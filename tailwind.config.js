/** @type {import('tailwindcss').Config} */
export default {
  content: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
  {
    pattern: /bg-(red|green|blue)-(200|600|800)/,
  }],

  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

