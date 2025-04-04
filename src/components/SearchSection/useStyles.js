import makeStyles from "@mui/styles/makeStyles";

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
      alignItems: "flex-end",
    },
  },
  inputSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    [breakpoints.up("md")]: {
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
  help: {
    marginLeft: typography.pxToRem(10),
  },
}));

export default useStyles;
