import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  listItem: {
    marginTop: typography.pxToRem(20),
  },
}));

export default useStyles;
