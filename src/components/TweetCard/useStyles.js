import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
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
    display: "flex",
    flexDirection: "column",
  },
  retweet: {
    marginTop: typography.pxToRem(10),
    "& .highlight": {
      color: "#DB1111",
    },
  },
  originalTweet: {
    marginTop: typography.pxToRem(10),
    "& .highlight": {
      color: "#DB1111",
    },
  },
}));

export default useStyles;
