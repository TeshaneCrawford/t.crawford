/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // My darkMode is set to class
  theme: {
    // Fonts
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      // Colors
      colors: {
        darkPrimary: "#181A1B",
        darkSecondary: "#25282A",
        darkWhite: "#F2F5FA",
      },
      // list style type
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      // Animation
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "photo-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      // Custom Screen Styles
      screens: {
        "3xl": "2000px",
        xs: "480px",
      },
  },
  // Adding Tailwind CSS Plugins
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
},
}
