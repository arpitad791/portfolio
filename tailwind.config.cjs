/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-mid": "pulse 3s ease-in-out infinite",
      },
      colors: {
        primary: "#fdf6f9",
        secondary: "#fbe6ee",
        tertiary: "#f8f4f9",
        "black-100": "#fceef4",
        "black-200": "#fae0ea",
        "white-100": "#ffffff",

        // 👇 Add this here
        neutral: {
          900: "black", // soft light pink for dark mode
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(255, 192, 203, 0.3)",
        "5xl": "20px 20px 50px rgba(255, 182, 193, 0.5)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
