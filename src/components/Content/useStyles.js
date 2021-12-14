import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    marginTop: typography.pxToRem(66),
  },
  title: {
    fontSize: typography.pxToRem(36),
    marginBottom: typography.pxToRem(30),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(30),
    },
  },
  link: {
    color: "unset",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  description: {
    marginBottom: typography.pxToRem(30),
  },
  row: {
    marginBottom: typography.pxToRem(80),
  },
  imageContainer: {
    position: "relative",
    display: "block",
    width: "max-content",
    height: "max-content",
    maxWidth: "100%",
  },
  shadow: {
    background: "#FFFFFF",
    boxShadow: "2px 2px 10px 5px rgba(0, 0, 0, 0.1)",
    padding: typography.pxToRem(2),
  },
  viewWebsite: {
    marginTop: typography.pxToRem(50),
  },
}));

export default useStyles;
