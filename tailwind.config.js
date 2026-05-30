/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme:{
    extend:{
      colors:{
        primary:"#0c0c0c",
        secondary:"#d7e2ea",
      },
      fontFamily:{
        kanit:["Kanit","san-serif"],
      },
    },
  },
  plugins:[],
}