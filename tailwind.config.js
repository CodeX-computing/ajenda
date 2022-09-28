/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('/src/assets/img/todo.webp')",
      }
    },
  },
  plugins: [],
};
