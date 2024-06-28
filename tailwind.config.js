/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        customBg:'#C8DEC8',
        sideComp:'#0D0714'
      },
      boxShadow: {
        glow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

