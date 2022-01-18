import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  formControl: {
    "& .MuiFilledInput-underline": {
      "&::before": {
        display: "none",
      },
    },
  },
  label: {
    color: "black",
    fontSize: typography.pxToRem(18),
    marginRight: typography.pxToRem(3),
    lineHeight: "149.49%",
    width: "5rem",
    textAlign: "center",
  },
  filled: {},
  filledPlaceholder: {
    color: "#959696",
  },
  placeholder: {
    color: "#959696",
    "&.Mui-selected": {
      display: "none",
    },
  },
  large: {
    width: 12,
    height: 26,
  },
  buttonIcon: {
    color: "black",
    height: typography.pxToRem(26),
    minWidth: 0,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("xl")]: {
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
}));

export default useStyles;
