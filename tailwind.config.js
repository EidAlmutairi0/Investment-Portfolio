/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#152d44",
        secondary: "#aaa6c3",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        sst: ["SST", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
