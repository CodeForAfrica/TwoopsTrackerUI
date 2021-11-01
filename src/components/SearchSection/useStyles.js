import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: `${typography.pxToRem(88)} 0`,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "end",
    marginTop: typography.pxToRem(40),
  },
  button: {
    backgroundColor: "#fff",
    color: "#DB1111",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
}));

export default useStyles;
