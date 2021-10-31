import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundColor: "#fff",
  },
  input: {
    marginLeft: typography.pxToRem(10),
  },
}));

export default useStyles;
