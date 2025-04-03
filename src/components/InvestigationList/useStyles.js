import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(66),
  },
  pagination: {
    borderTop: "1px solid #D0D0D0",
  },
  otherCards: {
    borderTop: "1px solid #D0D0D0",
    paddingTop: typography.pxToRem(48),
  },
}));

export default useStyles;
