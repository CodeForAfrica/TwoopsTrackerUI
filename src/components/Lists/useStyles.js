import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  section: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: typography.pxToRem(30),
  },
  listItem: {
    marginTop: typography.pxToRem(20),
  },
  button: {
    backgroundColor: "red",
    color: "#fff",
  },
}));

export default useStyles;
