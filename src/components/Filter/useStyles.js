import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  form: {
    backgroundColor: "#FFF",
  },
  label: {
    color: "#000",
    marginLeft: typography.pxToRem(5),
  },
  select: {
    paddingLeft: typography.pxToRem(5),
  },
  box: {
    marginTop: typography.pxToRem(20),
    marginLeft: typography.pxToRem(5),
    [breakpoints.up("lg")]: {
      marginTop: "0",
      minWidth: "auto",
    },
  },
}));

export default useStyles;
