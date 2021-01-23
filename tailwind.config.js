module.exports = {
  purge: [
    "./pages/**/*.ts",
    "./pages/**/*.tsx",
    "./components/**/*.ts",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxHeight: {
        "90vh": "90vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
