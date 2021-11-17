import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  listName: {
    fontWeight: "700",
    fontSize: typography.pxToRem(36),
    margin: `${typography.pxToRem(20)} 0`,
  },
}));

export default useStyles;
