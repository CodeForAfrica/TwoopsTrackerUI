import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
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
    width: typography.pxToRem(125),
    height: typography.pxToRem(125),
    border: `solid 1px ${palette.secondary.main}`,
  },
  username: {},
  userDetails: {
    marginLeft: typography.pxToRem(30),
    marginBottom: typography.pxToRem(30),
  },
  buttons: {
    marginTop: typography.pxToRem(66),
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
    marginRight: typography.pxToRem(10),
  },
  divider: {
    marginTop: typography.pxToRem(15),
    backgroundColor: palette.background.dark,
  },
}));

export default useStyles;
