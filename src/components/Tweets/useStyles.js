import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {},
  section: {
    marginTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      width: typography.pxToRem(1270),
    },
  },
  text: {
    color: "#808080",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    paddingTop: typography.pxToRem(20),
  },
}));

export default useStyles;
