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
  },
  section: {},
  logoButton: {
    margin: "0 auto",
    padding: 0,
    width: typography.pxToRem(195.73),
    [breakpoints.up("lg")]: {
      margin: 0,
    },
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(261.38),
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
    letterspacing: typography.pxToRem(0.7),
    [breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
  stayInTouchIcon: {
    height: "auto",
    objectFit: "fill",
    width: "auto",
    [breakpoints.up("xl")]: {
      objectFit: "none",
    },
  },
  stayInTouchText: {
    color: palette.text.secondary,
    fontWeight: 700,
    fontSize: typography.pxToRem(10.48),
    lineHeight: 15.67 / 10.48,
    margin: 0,
    padding: `${typography.pxToRem(10)} ${typography.pxToRem(0)}`,
    [breakpoints.up("lg")]: {
      padding: 0,
    },
    [breakpoints.up("xl")]: {
      fontSize: typography.pxToRem(14),
      lineHeight: 20.93 / 14,
    },
  },
  stayInTouchLink: {
    padding: 0,
  },
  stayInTouchLinks: {
    [breakpoints.up("lg")]: {
      marginLeft: typography.pxToRem(21.84),
    },
    [breakpoints.up("xl")]: {
      marginLeft: typography.pxToRem(29),
    },
    "& > a": {
      borderRight: "none",
      display: "flex",
      justifyContent: "center",
      height: typography.pxToRem(17.96),
      width: typography.pxToRem(17.96),
      marginRight: typography.pxToRem(13),
      [breakpoints.up("xl")]: {
        height: typography.pxToRem(24),
        width: typography.pxToRem(24),
        marginRight: typography.pxToRem(18),
      },
    },
    "& > a:last-of-type": {
      marginRight: 0,
    },
  },
  quickLinkRoot: {
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
    fontFamily: typography.body1.fontFamily,
    textDecoration: "underline",
    "&:hover": {
      color: "white",
      textDecoration: "underline",
    },
  },
  quickLinksTitle: {
    color: palette.text.secondary,
    fontWeight: "bold",
    fontFamily: typography.body1.fontFamily,
  },
  description: {
    color: palette.text.secondary,
    padding: `${typography.pxToRem(33)} 0`,
    fontFamily: typography.subtitle1.fontFamily,
    [breakpoints.up("lg")]: {
      textAlign: "left",
    },
    [breakpoints.up("xl")]: {
      padding: `${typography.pxToRem(45)} 0`,
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
