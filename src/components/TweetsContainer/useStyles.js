import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {},
  chartRoot: {
    backgroundColor: palette.background.default,
    padding: `${typography.pxToRem(44.5)} 0 0`,
    [breakpoints.up("xl")]: {
      padding: `${typography.pxToRem(100)} 0 0`,
    },
  },
  content: {},
}));

export default useStyles;
