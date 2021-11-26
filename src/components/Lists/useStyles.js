import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItem: {
    marginTop: typography.pxToRem(20),
  },
  button: {
    backgroundColor: "red",
    color: "#fff",
    "&:hover": {
      color: "#DB1111",
    },
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
