/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F6AB00',  // orange shade
        secondary: '#db2777',  // soil color shade
        dark: '#0C0C0C',  // black shade  
        grey: '#C7C8CC',  // grey shade 
        light:"#f5f3f2",  // light shade
      },
      fontFamily: {
        Handjet: "Handjet", 
        neue: "neue",
        neueThin: "neueThin", 
        poppins:"poppins",
      },
      
    },
  },
  plugins: [],
}
