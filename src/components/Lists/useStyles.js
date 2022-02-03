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
  createListModal: {},
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
  downloadAction: {
    order: 1,
    [breakpoints.up("md")]: {
      order: 0,
    },
  },
  sortAction: {
    order: 2,
    [breakpoints.up("md")]: {
      order: 0,
    },
  },
  otherActions: {
    order: 0,
    [breakpoints.up("md")]: {
      order: 2,
    },
  },
  noLists: {
    paddingTop: typography.pxToRem(42),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(72),
    },
    [breakpoints.up("xl")]: {
      paddingTop: typography.pxToRem(80),
    },
  },
}));

export default useStyles;
