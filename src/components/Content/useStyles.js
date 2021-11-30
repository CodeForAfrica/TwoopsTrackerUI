import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(66),
  },
  title: {
    marginBottom: typography.pxToRem(50),
  },
  link: {
    color: "unset",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  description: {},
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
    padding: typography.pxToRem(24),
  },
  viewWebsite: {
    marginTop: typography.pxToRem(50),
  },
}));

export default useStyles;
