import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  icon: {
    position: "relative",
    width: typography.pxToRem(64),
    height: typography.pxToRem(64),
    border: `solid 1px`,
    "& img": {
      padding: `${typography.pxToRem(10)} !important`,
    },
  },
}));

export default useStyles;
