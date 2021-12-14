import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {},
  section: {
    display: "flex",
    justifyContent: "space-between",
    [breakpoints.up("sm")]: {
      // justifyContent: "space-between",
    },
  },
  listItem: {
    marginTop: typography.pxToRem(20),
  },
  pagination: {
    width: "100%",
  },
  create: {
    cursor: "pointer",
    color: palette.primary.main,
    textDecoration: "underline",
    position: "relative",
    top: typography.pxToRem(90),
  },
  label: {
    color: "#000",
  },
  checkbox: {
    color: "#000",
  },
  createButton: {
    backgroundColor: "red",
    color: "#fff",
  },
  formControl: {
    marginBottom: typography.pxToRem(20),
  },
  actions: {
    width: "100%",
  },
}));

export default useStyles;
