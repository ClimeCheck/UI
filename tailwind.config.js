/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Grotesk: ["Grotesk"],
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        "signup-hero": "url('/signupbg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00963F",
          palegreen: "#74BF44",
          secondary: "#0069B3",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
