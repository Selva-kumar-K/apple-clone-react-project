/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  
    },
    screens : {
      sm : '320px',
      md: '750px',
      lg: '1140px',
      xl : '1800px'
    }
  },
  plugins: [],
}

