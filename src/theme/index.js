import { createMuiTheme } from "@material-ui/core/styles";

const FONT_FAMILY = '"Arial", "sans-serif"';

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    xs: 0, // mobile
    md: 720, // tablet
    lg: 1440, // desktop
  },
  palette: {
    primary: {
      light: "#00BF71",
      main: "#044E3D",
    },
    secondary: {
      main: "#F9E600",
    },
    error: {
      main: "#FF005D",
    },
    background: {
      default: "#FFF",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#FFF",
    },
  },
  props: {
    MuiButtonBase: {
      // Disable ripple effect globally
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    h1: {
      fontFamily: FONT_FAMILY,
    },
    body1: {
      fontFamily: FONT_FAMILY,
    },
  },
});

export default theme;
