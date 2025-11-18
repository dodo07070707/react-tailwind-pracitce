/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainblue-color": "var(--mainblue-color)",
      },
    },
  },
  plugins: [],
};
