import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: `${typography.pxToRem(88)} 0`,
  },
  filterSection: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  buttonSection: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: typography.pxToRem(40),
  },
  saveButton: {
    marginRight: typography.pxToRem(15),
  },
  button: {},
}));

export default useStyles;
