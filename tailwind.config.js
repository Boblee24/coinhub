const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        xs:"475px",
        dm: "830px", 
        ...defaultTheme.screens
      },
      colors : {
        'primary-blue': '#074C83',
      }
    },
  },
  plugins: [],
}

