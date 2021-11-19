import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette }) => ({
  root: {},
  toggleButton: {
    border: "none",
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
