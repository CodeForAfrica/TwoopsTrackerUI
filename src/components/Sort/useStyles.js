import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  formControl: {
    "& .MuiFilledInput-underline": {
      "&::before": {
        display: "none",
      },
    },
  },
  box: {
    display: "flex",
    flexDirection: "row",
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
      background: "white",
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
  label: {
    fontSize: "18px",
    color: "black",
    marginRight: typography.pxToRem(3),
    width: "5rem",
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
