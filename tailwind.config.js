import("tailwindcss").Config;

module.exports = {
  darkMode: false,
  content: [
    "./pages/**.{js,ts,jsx,tsx}",
    "./components/**.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./styles/globals.css",
    "./utils/*.{js,jsx,ts,tsx}",
    "./utils/**.{js,jsx,ts,tsx}",
    "./lib/*.{js,jsx,ts,tsx}",
    "./lib/**.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7d4810",
          light: "#a76a33",
          lighter: "#c18f5a",
          dark: "#5c360b",
          darker: "#3e2306",
        },
        secondary: {
          DEFAULT: "#ffcc00",
          light: "#ffdd33",
          lighter: "#ffee66",
          dark: "#e6b800",
          darker: "#cc9d00",
        },
        background: {
          lightest: "#f8f8f8",
          light: "#eeeeee",
          DEFAULT: "#e5e5e5",
          dark: "#cccccc",
          darkest: "#b3b3b3",
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
