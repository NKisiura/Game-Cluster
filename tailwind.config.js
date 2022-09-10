const colors = {
  transparent: "transparent",
  white: "#fff",
  black: "#000",
  grey: {
    300: "#888888",
    400: "#828282",
    500: "#4d4d4d",
    600: "#3b3b3b",
    700: "#2b2b2b",
    800: "#202020",
    900: "#151515",
  },
};

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
