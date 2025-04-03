import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  section: {},
  text: {
    color: "#808080",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    paddingTop: typography.pxToRem(20),
  },
}));

export default useStyles;
