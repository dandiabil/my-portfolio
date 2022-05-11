module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E65F5C",
        black: "#222222",
        "smoky-black": "#111111",
        grey: "#4E4E4E",
        white: "#EDF2F4",
        blue: "#5CE3E6",
      },
    },
    fontFamily: {
      krona: ["Krona One", "sans-serif"],
      cabin: ["Cabin", "Georgia"],
      montserrat: ["montserrat", "monospace"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
