/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
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
        }, 
        secondary: {
          50: "#EAEDF1",
          100: "#D7DDE4",
          200: "#B0BBC9",
          300: "#8898AF",
          400: "#637692",
          500: "#475569",
          600: "#3A4555",
          700: "#2B3440",
          800: "#1D232B",
          900: "#0E1115"
        },
        badge: "#F1F5F9",
      }
    },
  },
  plugins: [],
}
