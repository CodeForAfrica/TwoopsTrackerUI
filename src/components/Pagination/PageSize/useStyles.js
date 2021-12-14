import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  label: {
    fontFamily: typography.subtitle1.fontFamily,
    fontStyle: "normal",
    fontWeight: "normal",
  },
  toggleButton: {
    border: "none",
    fontFamily: typography.subtitle1.fontFamily,
    fontSize: typography.pxToRem(18),
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "inherit",
    },
    "&.Mui-selected": {
      backgroundColor: "inherit",
      color: palette.text.primary,
    },
    "&.Mui-selected:hover": {
      backgroundColor: "inherit",
    },
  },
}));

export default useStyles;
