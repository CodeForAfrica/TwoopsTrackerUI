import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    flexGrow: 1,
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
    color: palette.text.primary,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  passwordButton: {
    "&:hover": {
      backgroundColor: palette.background.default,
    },
  },
  passwordText: { paddingLeft: 0 },
  container: {
    background: "#F7F7F7",
    padding: typography.pxToRem(30),
  },
  form: {
    marginTop: typography.pxToRem(40),
  },
  changePassword: {
    marginLeft: typography.pxToRem(30),
  },
  textfield: {
    marginBottom: typography.pxToRem(30),
  },
  input: {
    background: palette.background.default,
  },
  status: {
    color: "#00FF00",
    marginBottom: typography.pxToRem(10),
  },
}));

export default useStyles;
