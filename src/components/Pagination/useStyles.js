import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    margin: `${typography.pxToRem(40)} 0`,
  },
  section: {},
  ul: {},
}));

export default useStyles;
