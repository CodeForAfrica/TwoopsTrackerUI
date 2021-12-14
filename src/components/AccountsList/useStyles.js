import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
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
}));

export default useStyles;
