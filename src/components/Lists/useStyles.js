import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {},
  section: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "column",
      justifyContent: "space-between",
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
    padding: `${typography.pxToRem(20)} 0`,
    [breakpoints.up("md")]: {
      position: "relative",
      top: typography.pxToRem(60),
    },
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
