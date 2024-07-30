/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-bg-overlay":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/background.jpg')",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      merriweather: ["Merriweather", "sans-serif"],
    },
  },
  plugins: [],
};
