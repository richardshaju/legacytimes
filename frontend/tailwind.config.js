/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '423px',
      'md': '939px',
      'lg': '1402px',
      'xl': '1867px',
      '2xl': '2318px',
    },
  },
  plugins: [require("daisyui")],
}

