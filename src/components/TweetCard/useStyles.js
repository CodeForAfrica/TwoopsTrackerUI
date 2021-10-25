import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    boxShadow: `0 ${typography.pxToRem(4)} ${typography.pxToRem(
      8
    )} 0 rgba(0,0,0,0.2)`,
    marginBottom: `${typography.pxToRem(20)}`,
    padding: `${typography.pxToRem(20)}`,
    "& .highlight": {
      color: "#DB1111",
    },
  },
  section: {
    marginTop: typography.pxToRem(20),
  },
  username: {
    fontWeight: "700",
    fontSize: typography.pxToRem(36),
  },
  handle: {
    // marginTop: typography.pxToRem(10),
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
