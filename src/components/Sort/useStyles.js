import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
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
    marginRight: typography.pxToRem(10),
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
  sortButton: {
    color: "black",
    height: typography.pxToRem(26),
    width: typography.pxToRem(12),
    minWidth: 0,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
  },
  sortIcon: {},
}));

export default useStyles;
