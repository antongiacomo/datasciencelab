/** @type {import('tailwindcss').Config} */
export default {
  content: ['pages/**/*.{js,jsx,ts,tsx,vue}', 'components/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  safelist: [
  {
    pattern: /bg-(red|green|blue)-(200|600|800)/,
  },
  {
    pattern: /border-(red|green|blue)-(200|600|800)/,
  },
  {
    pattern: /text-(red|green|blue)-(200|600|800)/,
  }],

  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

