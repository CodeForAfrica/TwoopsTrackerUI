import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    flexGrow: 1,
    color: "white",
    background: "none",
    height: "100vh",
    margin: "auto",
  },
  section: {
    marginTop: typography.pxToRem(80),
    marginBottom: typography.pxToRem(80),
  },

  formStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: typography.pxToRem(22),
    marginBottom: typography.pxToRem(44),
    display: "block",
  },
  label: {
    color: "black",
    position: "relative",
    top: -20,
    transform: "none",
  },
  container: {
    background: "#F7F7F7",
    padding: typography.pxToRem(30),
  },
  form: {
    marginTop: typography.pxToRem(40),
  },
  textfield: {
    marginBottom: typography.pxToRem(30),
  },
  input: {
    background: "white",
  },
}));

export default useStyles;
