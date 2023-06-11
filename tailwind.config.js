/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        my: " 0px 10px 30px rgba(17, 38, 146, 0.05);",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
