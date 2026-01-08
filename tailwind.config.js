/** @type {import('tailwindcss').Config} */
export default {    
  theme: {
    screens : {
      'xs' : '0px',
      'sm' : '576px',
      'md' : '768px',
      'lg' : '992px',
      'xl' : '1200px',
      '2xl' : '1400px'
    },
    extend: {
        colors : {
            techno: "rgb(34,60,120)",
            soft: "#e0e7ff",
        }
    },
  },
  plugins: [],
};