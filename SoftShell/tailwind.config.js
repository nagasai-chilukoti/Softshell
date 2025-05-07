/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // 👈 this is the key change
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
