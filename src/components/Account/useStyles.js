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
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "relative",
    width: typography.pxToRem(165),
    height: typography.pxToRem(165),
    border: `solid 1px`,
  },
  detailSection: {
    marginLeft: 0,
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
  },
  list: {
    marginTop: typography.pxToRem(10),
  },
  buttonSection: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    [breakpoints.down("md")]: {
      justifyContent: "flex-start",
      marginTop: typography.pxToRem(20),
    },
  },

  delete: {},
}));

export default useStyles;
