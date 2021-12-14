import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {},
  chartRoot: {
    padding: `${typography.pxToRem(50)} 0`,
    backgroundColor: palette.background.default,
  },
}));

export default useStyles;
