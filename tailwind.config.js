/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(0, 204, 255)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
