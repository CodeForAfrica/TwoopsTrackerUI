import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundColor: "inherit",
    boxShadow: "none",
    borderRadius: 0,
    padding: 0,
    width: "100%",
  },
  actionArea: {},
  actionAreaFocusHighlight: {},
  actionAreaFocusVisible: {},
  content: {},
  contentDescription: {},
  contentLink: {},
  contentTitle: ({ squareMedia }) => ({
    marginTop: typography.pxToRem(squareMedia ? 20 : 40),
  }),
  media: {
    height: typography.pxToRem(322),
    width: typography.pxToRem(228),
  },
}));

export default useStyles;
