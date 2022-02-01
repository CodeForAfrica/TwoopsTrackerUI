import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  section: {
    margin: `${typography.pxToRem(20)} 0`,
    display: "flex",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "red",
    color: "#fff",
    "&:hover": {
      color: "#DB1111",
    },
  },

  titleSection: {
    margin: `${typography.pxToRem(20)} 0`,
    display: "flex",
    justifyContent: "space-between",
    [breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
}));

export default useStyles;
