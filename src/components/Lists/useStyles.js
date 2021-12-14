import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  section: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    marginTop: typography.pxToRem(20),
  },
  pagination: {
    width: "100%",
  },
  button: {},
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
