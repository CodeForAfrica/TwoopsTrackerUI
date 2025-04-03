import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    marginTop: typography.pxToRem(80),
    marginBottom: typography.pxToRem(80),
  },
  text: {
    marginTop: typography.pxToRem(22),
  },
  label: {
    color: palette.text.primary,
    position: "relative",
    top: typography.pxToRem(-7),
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
    background: palette.background.default,
  },
}));

export default useStyles;
