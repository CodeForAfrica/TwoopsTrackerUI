import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints, palette }) => ({
  root: {},
  form: {
    backgroundColor: palette.background.default,
    height: "100%",
  },
  label: {
    color: "#000",
    marginLeft: typography.pxToRem(5),
    fontSize: typography.body2.fontSize,
    "&.Mui-focused": {
      color: palette.secondary.main,
    },
  },
  select: {
    fontSize: typography.body2.fontSize,
    paddingLeft: typography.pxToRem(5),
    paddingTop: typography.pxToRem(7),
    "&:before": {
      borderColor: palette.background.default,
    },
    "&:after": {
      borderColor: palette.background.default,
    },
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
