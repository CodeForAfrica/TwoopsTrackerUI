import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    marginBottom: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(80),
      paddingRight: typography.pxToRem(118),
    },
  },
  card: {
    marginRight: typography.pxToRem(60),
  },
  content: {
    display: "flex",
    alignItems: "center",
    padding: "0rem 1rem",
  },
  description: {
    margin: `${typography.pxToRem(20)} 0`,
    overflow: "hidden",
    boxOrient: "vertical",
    display: "-webkit-box",
    lineClamp: 4,
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(30)} 0`,
    },
  },
  media: {
    height: typography.pxToRem(238),
    width: typography.pxToRem(169),
    "& span": {
      boxShadow: `0 4px 8px 0 rgba(0,0,0,0.4)`,
    },
  },
  featured: {
    height: `${typography.pxToRem(421)} !important`,
    width: `${typography.pxToRem(300)} !important`,
    "& span": {
      boxShadow: `0 4px 8px 0 rgba(0,0,0,0.4)`,
    },
  },
  title: {
    overflow: "hidden",
    boxOrient: "vertical",
    display: "-webkit-box",
    lineClamp: 3,
    fontWeight: "bold",
  },
}));

export default useStyles;
