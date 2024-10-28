/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        logotype: ["logotype", "sans-serif"],
      },
    },
  },
  plugins: [],
};
