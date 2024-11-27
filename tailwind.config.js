/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye todos los archivos en src
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        frontis: "url('/images/frontisunsaac.jpg')", // Imagen personalizada
      },
    },
  },
  plugins: [],
};
