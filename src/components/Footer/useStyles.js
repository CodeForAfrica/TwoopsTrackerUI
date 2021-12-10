import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    background: palette.primary.main,
    height: "auto",
    padding: `${typography.pxToRem(80)} 0`,
    [breakpoints.up("md")]: {
      paddingTop: `${typography.pxToRem(58)}`,
      paddingBottom: `${typography.pxToRem(82)}`,
    },
    [breakpoints.up("lg")]: {
      paddingTop: `${typography.pxToRem(106)}`,
      paddingBottom: `${typography.pxToRem(106)}`,
    },
  },
  section: {},
  logoButton: {
    margin: "0 auto",
    padding: 0,
    [breakpoints.up("lg")]: {
      margin: 0,
    },
  },
  allLinks: {
    margin: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: typography.pxToRem(44.19),
  },
  stayInTouch: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    letterspacing: typography.pxToRem(0.7),
    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  stayInTouchIcon: {
    height: "auto",
    objectFit: "none",
    display: "flex",
    width: "auto",
  },
  stayInTouchText: {
    color: palette.text.secondary,
    fontSize: typography.subtitle2.fontSize,
    fontWeight: "bold",
    marginRight: typography.pxToRem(16),
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(8)}`,
    [breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  stayInTouchLink: {
    padding: 0,
  },
  stayInTouchLinks: {
    justifyContent: "center",
    marginLeft: typography.pxToRem(-14), // (48 - 20) / 2
    "& > a": {
      height: typography.pxToRem(48),
      width: typography.pxToRem(48),
      borderRight: "none",
      display: "flex",
      justifyContent: "center",
    },
  },
  quickLinkRoot: {
    textAlign: "center",
    padding: `${typography.pxToRem(32)} 0 `,
    [breakpoints.up("lg")]: {
      textAlign: "inherit",
      padding: 0,
    },
  },
  quickList: {
    listStyle: "none",
    color: palette.text.secondary,
    padding: 0,
    letterspacing: typography.pxToRem(0.7),
    "& > li": {
      marginTop: typography.pxToRem(16),
    },
  },
  quickLink: {
    color: palette.text.secondary,
    fontWeight: "normal",
    "&:hover": {
      color: palette.primary.light,
    },
    fontFamily: typography.body1.fontFamily,
  },
  quickLinksTitle: {
    color: palette.text.secondary,
    fontWeight: "bold",
    fontFamily: typography.body1.fontFamily,
  },
  description: {
    color: palette.text.secondary,
    margin: `${typography.pxToRem(32)} 0`,
    fontSize: typography.subtitle1.fontSize,
    textAlign: "center",
    [breakpoints.up("xl")]: {
      margin: `${typography.pxToRem(45)} 0`,
      textAlign: "left",
    },
  },
  copyright: {
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    [breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },
    "& > a": {
      marginTop: typography.pxToRem(3),
    },
  },
  copyrightText: {
    color: palette.text.secondary,
    order: 5,
    padding: `0 ${typography.pxToRem(5)}`,
    [breakpoints.up("lg")]: {
      padding: `0 ${typography.pxToRem(10)}`,
    },
  },
}));

export default useStyles;
