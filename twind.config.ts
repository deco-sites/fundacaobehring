/** @type {import('$fresh/plugins/twind').Options} */
export default {
  plugins: {
    "my-container": "w-full my-0 mx-auto px-[10vw] md:(px-[8vw]) sm:(px-[8vw])"
  },
  theme: {
    extend: {
      screens: {
        sm: "599px",
        md: "1099px",
      },
      colors: {
        "white": "#ffffff",
        "blue": "#0e649f",
        "blue-dark": "#1e1a62",
        "green": "#00b030",
        "green-dark": "#005d2b",
        "gray": "#4c4c4c"
      },
      fontFamily: {
        sans: ["Poppins", "Calibri", "Lucida Grande", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
};
