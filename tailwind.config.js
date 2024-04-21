/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    /* eslint-disable global-require */
    require('@tailwindcss/typography'),
  ],
};
