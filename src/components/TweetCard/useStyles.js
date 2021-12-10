import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    borderBottom: "1px solid #00000040",
    marginBottom: `${typography.pxToRem(20)}`,
    padding: `${typography.pxToRem(20)}`,
    "& .highlight": {
      color: palette.primary.main,
    },
  },
  section: {
    marginTop: typography.pxToRem(20),
  },
  username: {
    fontWeight: "700",
    [breakpoints.up("xl")]: {
      fontSize: typography.pxToRem(36),
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
  deleteTime: {},
  interactions: {},
  text: {
    marginTop: typography.pxToRem(10),
  },
  icon: {
    position: "relative",
    width: typography.pxToRem(100),
    height: typography.pxToRem(100),
    border: `solid 1px`,
    "& img": {
      padding: `${typography.pxToRem(10)} !important`,
    },
  },
  detailSection: {
    marginLeft: 0,
    [breakpoints.up("md")]: {
      marginLeft: typography.pxToRem(20),
    },
  },
  retweet: {
    marginTop: typography.pxToRem(10),
  },
  originalTweet: {
    marginTop: typography.pxToRem(10),
  },
}));

export default useStyles;
