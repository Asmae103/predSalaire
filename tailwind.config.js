/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'className', // important
  theme: {
    extend: {
      colors: {
        // primary: "#f7724aff",
        // neutral: "#333333",
        // darkBg: "#0b1020",
        // lightBg: "#ffffff",
      },
    },
  },
  plugins: [],
};




// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: '', // <-- active le mode sombre via la classe "dark"
//   theme: {
//     extend: {
//       colors: {
//         primary: "#4a6cf7",
//       },
//     },
//   },
//   plugins: [],
// };