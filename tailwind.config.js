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
      }, fontSize: {
        'h1' : ['3.5rem', {
          lineHeight: '3.75rem'
        }],
        'h2' : ['2.25rem', {
          lineHeight: '2.625rem'
        }],
        'h3' : ['1.875rem', {
          lineHeight: '2.25rem'
        }],
        'h4' : ['1.5rem', {
          lineHeight: '2rem'
        }],
        'h5' : ['1.25rem', {
          lineHeight: '1.75rem'
        }],
        'h6' : ['1.125rem', {
          lineHeight: '1.5rem'
        }],
        'poster' : ['6rem', {
          lineHeight: '6rem'
        }],
        'large-h1' : ['4.5rem', {
          lineHeight: '4.5rem'
        }],
        'section-title' : ['3rem', {
          lineHeight: '3rem'
        }]
      }
    },
  },
  plugins: [],
}
