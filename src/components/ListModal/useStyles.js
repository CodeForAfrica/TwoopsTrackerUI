import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ palette, typography }) => ({
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
    color: palette.primary.main,
  },
  error: {
    color: palette.primary.main,
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
