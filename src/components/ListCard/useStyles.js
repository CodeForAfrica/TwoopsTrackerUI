import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    borderBottom: "solid 1px gray",
    paddingBottom: typography.pxToRem(15),
  },
  title: {
    marginBottom: typography.pxToRem(10),
    color: "#000",
  },
  editButton: {},
  deleteButton: {
    marginLeft: typography.pxToRem(20),
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
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default useStyles;
