/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Grotesk"],
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#74BF44",
          secondary: "#0087D2",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "light",
    ],
  },
  plugins: [require("daisyui")],
}
