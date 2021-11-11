import { createTheme } from "@material-ui/core/styles";

const FONT_FAMILY = '"Arial", "sans-serif"';
const SECONDARY_FONT_FAMILY = '"Montserrat", "sans-serif"';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    xs: 0, // mobile
    md: 720, // tablet
    lg: 1440, // desktop
  },
  palette: {
    primary: {
      light: "#00BF71",
      main: "#DB1111",
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
    h4: {
      fontFamily: SECONDARY_FONT_FAMILY,
    },
    body1: {
      fontFamily: FONT_FAMILY,
    },
  },
  widths: {
    values: {
      md: 608, // 0, 80, 0, 80 margin - to be confirmed for TwoopsTracker
      lg: 1160, // 0, 140, 0, 140 margin - to be confirmed for TwoopsTracker
    },
  },
});

export default theme;
