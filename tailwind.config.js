/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#592abf",

          secondary: "#19a085",

          accent: "#ffea68",

          neutral: "#302631",

          "base-100": "#ffff",

          info: "#6ba4eb",

          success: "#5be197",

          warning: "#e7b223",

          error: "#df2a45",
          
          main: "#0076CE",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
