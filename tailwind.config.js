/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': {
          100: '#fc4634',
          500: '#d71f49',
          900: '#c6115e'
        },
      },
      boxShadow: {
        'shadowCustom': '4px 4px 10px 0px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}

