import("tailwindcss").Config;

module.exports = {
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
      animation: {
        "gradient-background": "rotate-gradient 30s ease infinite",
      },
      backgroundColor: {
        primary: "#7d4810", // brown
        secondary: "#ffcc00", // amber
      },
      textColor: {
        primary: "#7d4810", // brown
        secondary: "#ffcc00", // amber
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        // ? Color Palettes

        // ? Light mode https://coolors.co/ffffff-f7f8fa-f3f4f6-10b981

        primary: "#7d4810", // brown
        primaryDark: "#522f0b", // darker brown

        secondary: "#ffcc00", // amber

        // ! Color Palette

        // ? background colors for booleans

        success: "#16A34A", // green
        danger: "#EF4444", // red
        // ! Color Palettes
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
