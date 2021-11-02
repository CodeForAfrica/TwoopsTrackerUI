import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundColor: "#fff",
  },
  input: {
    marginLeft: typography.pxToRem(10),
    minWidth: typography.pxToRem(400),
  },
}));

export default useStyles;
