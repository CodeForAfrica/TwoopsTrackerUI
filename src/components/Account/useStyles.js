import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {},
  icon: {
    position: "relative",
    width: typography.pxToRem(100),
    height: typography.pxToRem(100),
    border: `solid 1px`,
    "& img": {
      padding: `${typography.pxToRem(10)} !important`,
    },
  },
  detailSection: {
    marginLeft: 0,
    [breakpoints.up("md")]: {
      marginLeft: typography.pxToRem(20),
    },
  },
  username: {
    fontWeight: "700",
    fontSize: typography.pxToRem(36),
  },
  handle: {
    display: "inline",
    color: "#DB1111",
  },
  accountType: {
    display: "inline",
    marginLeft: typography.pxToRem(10),
  },
  list: {
    marginTop: typography.pxToRem(10),
  },
  buttonSection: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },
  edit: {
    color: "#DB1111",
  },
  delete: {
    backgroundColor: "#DB1111",
    color: "#fff",
    marginLeft: typography.pxToRem(10),
  },
}));

export default useStyles;
