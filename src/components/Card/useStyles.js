import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    backgroundColor: "inherit",
    boxShadow: "none",
    borderRadius: 0,
    padding: 0,
    width: "100%",
  },
  actionArea: {
    "&:hover .MuiCardActionArea-focusHighlight": {
      opacity: 0,
    },
  },
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
