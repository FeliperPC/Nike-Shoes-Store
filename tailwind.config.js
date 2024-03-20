/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class', // allows to change the dark mode manualy on css class
  theme: {
    extend: {
      colors:{ 
        night:{ // Create the color's group name
          DEFAULT : '#0d1120', // set the default color if I use only text-night
          50 : '#171e2c', // set the first pallet color
          500 : '#0d1120' // set the second pallet color
        }
      },
      keyframes :{
        "fadeIn":{
          "0%" :{ opacity:"0" },
          "100%":{ opacity:"1" }
        },
        "float":{
          "0%, 100%":{ transform: "translateY(0)"},
          "50%" : {transform:"translateY(-10px)"}
        }
      },
      animation:{
        "fadeIn" : "fadeIn 1s ease-in-out",
        "float" : "float 4s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

