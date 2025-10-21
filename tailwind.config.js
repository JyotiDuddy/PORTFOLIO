/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
  theme: {
  extend: {
    colors: {
      primary: "#0d9488", // teal
      secondary: "#1e293b", // dark gray
      accent: "#14b8a6", // light teal
      light: "#f8fafc", // near-white background
    },
  },
},
  plugins: [],
}

