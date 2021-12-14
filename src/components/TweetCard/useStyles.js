import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    borderBottom: "1px solid #00000040",
    marginTop: typography.pxToRem(30),
    paddingRight: typography.pxToRem(30),
    paddingBottom: typography.pxToRem(48),
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
    [breakpoints.up("lg")]: {
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
    position: "relative",
    marginRight: typography.pxToRem(30),
    width: typography.pxToRem(165),
    height: typography.pxToRem(165),
    border: `solid 1px`,
    "& img": {
      padding: `${typography.pxToRem(22)} !important`,
    },
  },
  handleDetail: {
    marginBottom: typography.pxToRem(10),
    marginTop: typography.pxToRem(10),
  },
  retweet: {
    margin: `${typography.pxToRem(30)} 0`,
    height: typography.pxToRem(72),
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    "& .highlight": {
      color: palette.primary.main,
    },
  },
}));

export default useStyles;
