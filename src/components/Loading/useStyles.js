import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  progress: {
    color: "red",
  },
  box: {
    justifyContent: "center",
    marginTop: typography.pxToRem(20),
  },
}));

export default useStyles;
