/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1e293b',
        'light-gray': '#f1f5f9',
        'mid-gray': '#64748b',
        'dark-gray': '#475569',
        'accent-blue': '#2563eb',
      },
    },
  },
  plugins: [
    /* eslint-disable global-require */
    require('@tailwindcss/typography'),
  ],
};
