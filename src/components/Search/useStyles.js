import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    backgroundColor: "#fff",
    width: "100%",
    height: typography.pxToRem(64),
  },
  input: {
    marginLeft: typography.pxToRem(10),
    minWidth: "auto",
    [breakpoints.up("xl")]: {
      minWidth: typography.pxToRem(600),
    },
  },
}));

export default useStyles;
