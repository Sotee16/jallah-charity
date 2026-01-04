/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B2C5D', // Blue from your logo
        accent: '#C4161C',  // Red from your logo
      },
    },
  },
  plugins: [],
};
