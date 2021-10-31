import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: `${typography.pxToRem(88)} 0`,
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export default useStyles;
