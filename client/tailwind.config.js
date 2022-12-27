/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('/src/assets/img/todo.webp')",
        heroBg: "url('/src/assets/img/heroBg.webp')",
        main_picture: "url('/src/assets/img/main_picture.webp')",
        picture_1: "url('/src/assets/img/picture_1.webp')",
        picture_2: "url('/src/assets/img/picture_2.webp')",
        picture_3: "url('/src/assets/img/picture_3.webp')",
        picture_4: "url('/src/assets/img/picture_4.webp')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
