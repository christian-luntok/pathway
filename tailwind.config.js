/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Poppins'],
      secondary: ['"Open Sans"'],
    }, colors: {
      primary: {
        50: "#EDEDF8",
        100: "#DBDBF0",
        200: "#B7B7E1",
        300: "#9392D3",
        400: "#6F6EC4",
        500: "#4E4CB6",
        600: "#3C3B91",
        700: "#2D2C6D",
        800: "#1E1E48",
        900: "#0F0F24"
      }
    }
  },
  plugins: [],
}
