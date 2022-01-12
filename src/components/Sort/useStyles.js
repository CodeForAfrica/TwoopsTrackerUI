import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {},
  formControl: {
    "& .MuiFilledInput-underline": {
      "&::before": {
        display: "none",
      },
    },
  },
  select: {
    height: 0,
    minHeight: 0,
    width: typography.pxToRem(135),
    background: "white",
    border: "1px solid #D0D0D0",
    borderRadius: 2,
    paddingLeft: typography.pxToRem(24),
    paddingBottom: typography.pxToRem(15),
    paddingTop: typography.pxToRem(15),
    fontSize: typography.caption.fontSize,
    "&:focus": {
      borderRadius: 2,
      background: palette.background.paper,
      borderColor: "none",
    },
    "&::before": {
      display: "none",
    },
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(165),
    },
  },
  paper: {},

  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& li": {
      fontWeight: 400,
      paddingTop: 12,
      paddingBottom: 12,
    },
    "& li.Mui-selected": {
      fontWeight: "bold",
    },
  },
  inputLabel: {
    marginTop: typography.pxToRem(15),
  },
  label: {
    color: "#959696",
  },
  filled: {},
  filledPlaceholder: {
    color: "#959696",
  },
  placeholder: {
    color: "#959696",
    "&.Mui-selected": {
      // display: "none",
    },
  },
}));

export default useStyles;
