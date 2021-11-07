import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    borderBottom: "solid 1px gray",
    paddingBottom: typography.pxToRem(15),
  },
  title: {
    fontWeight: "bold",
    fontSize: typography.pxToRem(36),
    marginBottom: typography.pxToRem(36),
  },
  editButton: {
    color: "red",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "#fff",
    marginLeft: typography.pxToRem(20),
  },
}));

export default useStyles;
