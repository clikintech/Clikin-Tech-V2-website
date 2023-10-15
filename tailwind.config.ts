/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   colors: {
      "transparent": 'transparent',
      "current": 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'yellow': '#D9AF62',
      'blacky': '#374558',
      'graye': '#374558',
      'nebula': '#E6E8EA',
      



    },
    fontFamily: {
      'sans': ['Plus Jakarta Sans', 'sans-serif'],
    },
    boxShadow: {
      "box-shadow": "0px 4px 20px 0px rgba(255, 255, 255, 0.08)",
    },
    background: {
      "background": "var(--foundation-blue-blue-50, #E6E8EA)",

    },
    spacing: {
      "700px": "700px",
      "750px": "750px",
      "800px": "800px",
      "850px": "850px",
      "1600px": "1600px",



      "600px": "600px",
      "320px": "320px",

      "380px": "380px",
      "400px": "400px",
      "450px": "450px",

      "500px": "500px",
      "900px": "900px",

      "70vw": "70vw",
      "20px": "20px",
      "30px": "30px",
      "60px": "60px",
      "80px": "80px",
      "90px": "90px",
      "100px": "100px",
      "120px": "120px",
      "180px": "180px",
      "150px": "150px",
      "200px": "200px",


      
      "-50px": "-50px",
      "-40px": "-40px",
      "-60px": "-60px",

      "75vw": "75vw",
      // "70vw": "70vw",
      "65vw": "65vw",
      "50vw": "50vw",
      "100hw": "100hw",


},
height: {
      "${var}px": "${var}px"
  } },
  },
  plugins: [],
}
