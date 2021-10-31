import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  form: {
    backgroundColor: "#FFF",
  },
  label: {
    color: "#000",
    marginLeft: typography.pxToRem(5),
  },
}));

export default useStyles;
