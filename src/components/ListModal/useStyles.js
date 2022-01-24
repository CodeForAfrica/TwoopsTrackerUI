import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    borderBottom: "solid 1px gray",
    paddingBottom: typography.pxToRem(15),
  },
  title: {
    fontWeight: "bold",
    fontSize: typography.pxToRem(36),
    marginBottom: typography.pxToRem(10),
  },
  editButton: {
    color: "red",
  },
  label: {
    color: "#000",
  },
  checkbox: {
    color: "#000",
  },
  formControl: {
    marginBottom: typography.pxToRem(20),
  },
  deleteDescription: {
    marginBottom: typography.pxToRem(20),
  },
}));

export default useStyles;
