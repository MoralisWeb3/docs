/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: { preflight: false },
};
