/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        zinc: {
          950: "#0f0f0f",
          900: "#272727",
        },
      },
    },
  },
  plugins: [],
};
