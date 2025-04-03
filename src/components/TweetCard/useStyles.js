import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    borderBottom: "1px solid #00000040",
    marginTop: typography.pxToRem(30),
    paddingRight: typography.pxToRem(30),
    paddingBottom: typography.pxToRem(48),
    "& .LinesEllipsis": {
      fontFamily: typography.body1.fontFamily,
      fontSize: typography.pxToRem(18),
      lineHeight: 30 / 18,
      [breakpoints.up("md")]: {
        fontSize: typography.pxToRem(24),
        lineHeight: 35.88 / 24,
      },
      "& .highlight": {
        color: palette.primary.main,
      },
      "& .LinesEllipsis-ellipsis": {
        "& .moreButton": {
          color: palette.primary.main,
          textDecoration: "underline",
          background: "none",
          border: 0,
          fontFamily: typography.body1.fontFamily,
          fontSize: typography.pxToRem(18),
          lineHeight: 30 / 18,
          padding: 0,
          [breakpoints.up("md")]: {
            fontSize: typography.pxToRem(24),
            lineHeight: 35.88 / 24,
          },
        },
        "& .moreButton:hover": {
          cursor: "pointer",
        },
      },
    },
  },
  handle: {
    display: "inline",
    color: palette.primary.main,
  },
  accountType: {
    display: "inline",
    marginLeft: typography.pxToRem(10),
  },
  list: {
    marginTop: typography.pxToRem(10),
  },
  addToList: {
    color: "black",
    display: "flex",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("md")]: {
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
  deleteTime: {},
  interactions: {},
  text: {
    marginTop: typography.pxToRem(10),
    "& .highlight": {
      color: palette.primary.main,
    },
  },
  icon: {
    marginRight: typography.pxToRem(30),
    width: typography.pxToRem(165),
    height: typography.pxToRem(165),
    border: `1px solid ${palette.common.black}`,
    "& img": {
      borderRadius: "50%",
      padding: `${typography.pxToRem(22)} !important`,
    },
  },
  handleDetail: {
    marginBottom: typography.pxToRem(10),
    marginTop: typography.pxToRem(10),
  },
  seeLessButton: {
    color: palette.primary.main,
    textDecoration: "underline",
    fontFamily: typography.body1.fontFamily,
    fontSize: typography.pxToRem(18),
    lineHeight: 30 / 18,
    padding: 0,
    [breakpoints.up("md")]: {
      fontSize: typography.pxToRem(24),
      lineHeight: 35.88 / 24,
    },
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },
  content: {
    margin: `${typography.pxToRem(30)} 0`,
  },
}));

export default useStyles;
