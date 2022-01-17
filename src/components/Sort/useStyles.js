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
  select: {
    height: 0,
    minHeight: 0,
    width: typography.pxToRem(135),
    background: "white",
    border: "1px solid #D0D0D0",
    borderRadius: 2,
    paddingLeft: typography.pxToRem(22),
    paddingBottom: typography.pxToRem(12),
    paddingTop: typography.pxToRem(12),
    fontSize: typography.caption.fontSize,
    "& .MuiSelect-select:focus": {
      backgroundColor: "none",
    },
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
  inputBase: {
    padding: typography.pxToRem(2),
    backgroundColor: "white",
    height: typography.pxToRem(28),
    width: typography.pxToRem(163),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(163),
    },
  },

  inputBaseInput: {
    textAlign: "left",
    paddingLeft: typography.pxToRem(16),
    fontSize: typography.pxToRem(18),
    lineHeight: "149.49%",
    width: "100%",
    "label[data-shrink=false] + .MuiInputBase-formControl &::placeholder": {
      opacity: "0.5!important",
    },
  },
  svgSelectIcon: {
    position: "absolute",
    top: 10,
    pointerEvents: "none",
    color: "#A0A0A0",
    fontSize: "1.2rem",
    right: typography.pxToRem(4),
  },
}));

export default useStyles;
