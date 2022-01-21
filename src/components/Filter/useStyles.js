import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  form: {
    backgroundColor: "#FFF",
  },
  label: {
    color: "#000",
    marginLeft: typography.pxToRem(5),
    fontSize: typography.body2.fontSize,
  },
  select: {
    fontSize: typography.body2.fontSize,
    paddingLeft: typography.pxToRem(5),
    paddingTop: typography.pxToRem(7),
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
