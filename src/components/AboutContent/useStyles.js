import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(66),
  },
  title: {
    marginBottom: typography.pxToRem(50),
  },
  link: {
    color: "unset",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  description: {},
  row: {
    marginBottom: typography.pxToRem(80),
  },
}));

export default useStyles;