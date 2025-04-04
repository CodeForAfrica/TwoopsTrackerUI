import makeStyles from "@mui/styles/makeStyles";

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
