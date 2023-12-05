const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#00D4A4",
        BlueMarine: "#001F3F",
      },
      fontFamily: {},
    },
  },
  plugins: [],
});
