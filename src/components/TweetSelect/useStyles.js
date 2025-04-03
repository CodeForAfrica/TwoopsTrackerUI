import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
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
    ...typography.body2,
    paddingLeft: typography.pxToRem(16),
    textAlign: "left",
    width: "100%",
    "label[data-shrink=false] + .MuiInputBase-formControl &::placeholder": {
      opacity: "0.5!important",
    },
  },
  svgSelectIcon: {
    ...typography.body2,
    position: "absolute",
    top: 10,
    pointerEvents: "none",
    color: "#A0A0A0",
    right: typography.pxToRem(4),
  },
  menuItem: {
    ...typography.body2,
  },
}));

export default useStyles;
