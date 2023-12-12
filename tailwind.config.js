/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary": "#DDD0C8",
      "secondary": "#323232",
      "accent": "#FFFFFF"
    },
    backgroundSize: {
      "50vh": "50vh"
    },
    boxShadow: {
      "small": "0px 13px 10px -12px #323232",
      "custom": '0 30px 25px -14px #323232',
      "custom-active": '0 50px 25px -24px #323232',

    },
    screens: {
      "tablet": "700px",
      "desctop": "1100px",
    },

  },
  plugins: [],
}

