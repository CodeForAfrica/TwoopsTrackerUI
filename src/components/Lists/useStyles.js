import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  section: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: typography.pxToRem(30),
  },
  listItem: {
    marginTop: typography.pxToRem(20),
  },
  button: {
    backgroundColor: "red",
    color: "#fff",
  },
  listTitle: {
    fontWeight: "bold",
    fontSize: typography.pxToRem(36),
    marginBottom: typography.pxToRem(10),
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
}));

export default useStyles;
