/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Si estás usando el app router
    './src/pages/**/*.{js,ts,jsx,tsx}', // O si prefieres usar el sistema de pages
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
