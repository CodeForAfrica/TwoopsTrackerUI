import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  chartRoot: { padding: `${typography.pxToRem(50)} 0` },
}));

export default useStyles;
