import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  card: {
    marginTop: typography.pxToRem(20),
    padding: `${typography.pxToRem(20)}`,
    "& .highlight": {
      color: "#DB1111",
    },
  },
  icon: {
    position: "relative",
    width: typography.pxToRem(100),
    height: typography.pxToRem(100),
    border: `solid 1px`,
    "& img": {
      padding: `${typography.pxToRem(10)} !important`,
    },
  },
  username: {
    fontWeight: "700",
    fontSize: typography.pxToRem(36),
  },
  userDetails: {
    marginLeft: typography.pxToRem(30),
    marginBottom: typography.pxToRem(30),
  },
  buttons: {
    margin: `${typography.pxToRem(10)} 0`,
  },
  listItem: {
    border: "solid 1px rgba(0,0,0,0.12)",
    marginBottom: typography.pxToRem(1),
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  link: {
    color: "#000",
    "&:hover": {
      textDecoration: "none",
    },
  },
  button: {
    marginLeft: typography.pxToRem(5),
    borderRadius: typography.pxToRem(25),
    minWidth: typography.pxToRem(100),
    border: "solid 1px transparent",
    "&:hover": {
      border: "solid 1px red",
    },
  },
}));

export default useStyles;