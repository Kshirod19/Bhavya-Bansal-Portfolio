/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Header: [ "Bubblegum Sans", "sans-serif"],
        Body: ["Shantell Sans", "cursive;"],
        Nav: ["Prompt", "sans-serif;"],

      },
      backdropBlur: {
        lg: "10px", // Define the blur amount
      },
    },
  },
  plugins: [],
};
