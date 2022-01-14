import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
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
  loginButton: {
    marginBottom: "1rem",
    marginTop: typography.pxToRem(40),
    paddingLeft: typography.pxToRem(2),
    paddingRight: "2rem",
    color: "#4285F4",
    borderRadius: 0,
    "&:hover": {
      textDecoration: "none",
      color: "#4285F4",
      backgroundColor: palette.background.default,
    },
    backgroundColor: palette.background.default,
    boxShadow: `2px 2px 5px rgba(0, 0, 0, 0.25)`,
    fontWeight: 800,
    fontSize: typography.subtitle2.fontSize,
    height: "3rem",
    [breakpoints.up("xl")]: {
      fontSize: typography.subtitle1.fontSize,
      height: "3.5rem",
    },
  },
  buttonContainer: {
    [breakpoints.up("md")]: {
      width: "400px",
    },
    "& .MuiLink-underlineHover": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  passwordButton: {
    "&:hover": {
      backgroundColor: palette.background.default,
    },
  },
  passwordText: { paddingLeft: 0 },
  formStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    color: "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: typography.pxToRem(22),
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
  signinText: { marginLeft: typography.pxToRem(30), fontWeight: 700 },
  textfield: {
    marginBottom: typography.pxToRem(30),
  },
  input: {
    background: "white",
  },
  button: {
    marginLeft: typography.pxToRem(10),
  },
}));

export default useStyles;
