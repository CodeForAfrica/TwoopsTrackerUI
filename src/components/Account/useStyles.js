import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    borderBottom: "solid 1px gray",
    marginBottom: `${typography.pxToRem(20)}`,
    padding: `${typography.pxToRem(20)}`,
    "& .highlight": {
      color: "#DB1111",
    },
  },
  avatar: {
    width: "80%",
    height: "80%",
    margin: typography.pxToRem(10),
  },
  icon: {
    position: "relative",
    width: typography.pxToRem(100),
    height: typography.pxToRem(100),
    border: `solid 1px`,
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

  delete: {
    backgroundColor: "#DB1111",
    color: "#fff",
    marginLeft: typography.pxToRem(10),
  },
}));

export default useStyles;
