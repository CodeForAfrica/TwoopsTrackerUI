import { createTheme } from "@material-ui/core/styles";
import { deepmerge } from "@material-ui/utils";

const FONT_FAMILY_HEADING = '"Playfair Display", "serif"';
const FONT_FAMILY_TEXT = '"Arial", "sans-serif"';
const FONT_FAMILY_TEXT2 = '"Montserrat", "sans-serif"';

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // mobile
      md: 960, // tablet
      lg: 1280, // desktop
      xl: 1920, // exta-large
    },
  },
  palette: {
    primary: {
      main: "#DB1111",
    },
    secondary: {
      main: "#000",
    },
    background: {
      default: "#FFF",
      secondary: "#DB1111",
    },
    text: {
      primary: "#000000",
      secondary: "#FFF",
    },
  },
  props: {
    MuiButtonBase: {
      // Disable ripple effect globally
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_TEXT,
    h1: {
      fontFamily: FONT_FAMILY_HEADING,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: FONT_FAMILY_HEADING,
      fontWeight: "bold",
    },
    h3: {
      fontFamily: FONT_FAMILY_HEADING,
      fontWeight: "bold",
    },
    h4: {
      fontFamily: FONT_FAMILY_HEADING,
      fontWeight: "bold",
    },
    h5: {
      fontFamily: FONT_FAMILY_HEADING,
    },
    subtitle1: {
      fontFamily: FONT_FAMILY_TEXT2,
    },
    body1: {
      fontFamily: FONT_FAMILY_TEXT,
    },
    button: {
      fontFamily: FONT_FAMILY_TEXT2,
      fontStretch: "normal",
      fontStyle: "normal",
      fontWeight: "normal",
      letterSpacing: 0,
      textTransform: "none",
    },
    caption: {
      fontFamily: FONT_FAMILY_HEADING,
    },
    overline: {
      fontFamily: FONT_FAMILY_TEXT,
      textTransform: "none",
    },
    chart: {
      fontFamily: FONT_FAMILY_TEXT2,
    },
  },
  widths: {
    values: {
      md: 900, // 0, 80, 0, 80 margin - to be confirmed for TwoopsTracker
      lg: 1200, // 0, 140, 0, 140 margin - to be confirmed for TwoopsTracker
      xl: 1520,
    },
  },
});

const { breakpoints, palette, typography, overrides } = theme;
const { pxToRem } = typography;

// Typography
deepmerge(
  typography,
  {
    h1: {
      fontSize: pxToRem(60),
      lineHeight: 75.6 / 60,
      color: palette.text.secondary,
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(72),
        lineHeight: 79.2 / 72,
      },
    },
    h2: {
      fontSize: pxToRem(42),
      lineHeight: 49.2 / 24,
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(64),
        lineHeight: 70.4 / 64,
      },
    },
    h3: {
      fontSize: pxToRem(30),
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(53.33),
        lineHeight: 58.67 / 53.33,
      },
    },
    h4: {
      fontSize: pxToRem(24),
      [breakpoints.up("xl")]: { fontSize: pxToRem(36), lineHeight: 53.82 / 36 },
    },
    h5: {
      fontSize: pxToRem(14),
      lineHeight: 30 / 14,
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(16),
        lineHeight: 30 / 16,
      },
    },
    body1: {
      fontSize: pxToRem(18),
      lineHeight: 30 / 18,
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(24),
        lineHeight: 35.88 / 24,
      },
    },
    body2: {
      fontSize: pxToRem(18),
      lineHeight: 30 / 18,
    },
    button: {
      fontSize: pxToRem(16),
      lineHeight: "149.49%",
      [breakpoints.up("md")]: { fontSize: pxToRem(24) },
    },
    caption: {
      fontSize: pxToRem(14),
      [breakpoints.up("xl")]: { fontSize: pxToRem(14) },
    },
    subtitle1: {
      fontSize: typography.pxToRem(36),
      lineHeight: 39.6 / 36,
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: 20 / 14,
      [breakpoints.up("xl")]: {
        fontSize: typography.pxToRem(18),
        lineHeight: 30 / 18,
      },
    },
    overline: {
      fontSize: pxToRem(14),
      [breakpoints.up("xl")]: {
        fontSize: pxToRem(14),
      },
    },
  },
  { clone: false }
);

// Overrides
deepmerge(
  overrides,
  {
    MuiButton: {
      root: {
        padding: `${typography.pxToRem(10)} ${typography.pxToRem(20)}`,
      },
      contained: {
        color: "#a0a0a0",
        backgroundColor: palette.divider,
        boxShadow: "none",
        borderRadius: pxToRem(5),
        border: "1px solid transparent",
        transition: "none !important",
        "&:hover": {
          color: palette.text.secondary,
          backgroundColor: "#a0a0a0",
          border: "1px solid #707070",
          borderRadius: pxToRem(5),
        },
      },
      containedPrimary: {
        color: palette.text.secondary,
        backgroundColor: palette.primary.main,
        boxShadow: "none",
        borderRadius: 0,
        border: "1px solid transparent",
        "&:hover": {
          color: palette.text.secondary,
          backgroundColor: palette.primary.main,
          borderRadius: pxToRem(5),
          border: `1px solid ${palette.primary.main}`,
        },
      },
      containedSecondary: {
        color: palette.primary.main,
        backgroundColor: palette.background.default,
        boxShadow: "none",
        borderRadius: 0,
        border: "1px solid transparent",
        "&:hover": {
          color: palette.primary.main,
          backgroundColor: palette.background.default,
          borderRadius: pxToRem(5),
          border: `1px solid ${palette.background.default}`,
        },
      },
    },
  },
  { clone: false }
);
export default theme;
