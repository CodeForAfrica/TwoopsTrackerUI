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
    width: "100%",
    color: "white",
    "&:hover": {
      color: "#000",
    },
    backgroundColor: palette.primary.main,
    fontWeight: 800,
    fontSize: typography.subtitle2.fontSize,
    height: "3rem",
    [breakpoints.up("xl")]: {
      fontSize: typography.subtitle1.fontSize,
      height: "3.5rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
  buttonContainer: {
    paddingTop: "1rem",
    width: "400px",
    [breakpoints.between("xs", "xs")]: {
      width: "95vw",
    },
    "& .MuiLink-underlineHover": {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
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
  },
  container: {
    background: "#F7F7F7",
    padding: typography.pxToRem(30),
  },
}));

export default useStyles;
