const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Primary
        Green: "#00D4A4", //Primary COLOR
        BgGreen: "#00a47f", // Background Box
        TitleGreen: "#005547", //Text Titles
        TextGreen: "#003029", //Text Parrafo

        //BUTTON SOLID
        GreenHoverSolid: "#63f2c8", // TEXT #003029
        GreenActiveSolid: "#00d4a4", // TEXT #003029
        GreenDefaultSolid: "#25e2b1", // TEXT #003029
        GreenDisableSolid: "#006755", //Button Disable TEXT #cdfeea

        //BUTTON OUTLINE
        GreenHoverOutline: "#003029", // BACKGROUND TEXT  #63f2c8
        GreenActiveOutiline: "#005547", //BACKGROUND TEXT #63f2c8
        GreenDefaultOutline: "#63f2c8", //Only TEXT AND OUTLINE
      },
      fontFamily: {},
    },
  },
  plugins: [],
});
