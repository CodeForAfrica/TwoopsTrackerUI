import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {},

  titleSection: {
    margin: `${typography.pxToRem(20)} 0`,
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default useStyles;
