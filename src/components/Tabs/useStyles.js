import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  indicator: {
    width: 0,
  },
  tabs: {},
  tab: {
    color: palette.secondary.main,
    fontWeight: 400,
    lineHeight: typography.pxToRem(54),
    fontSize: typography.h4.fontSize,
    width: typography.pxToRem(304),
    padding: typography.pxToRem(10),
    margin: typography.pxToRem(3),
    textAlign: "left",
    opacity: 1,
    border: "2px solid transparent",
    boxShadow: "0px 2px 4px 0px #00000040",
    "&:hover, &:focus, &$selected": {
      border: `2px solid ${palette.primary.main}`,
    },
  },
  wrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  tabSelected: {
    border: `2px solid ${palette.primary.main}`,
    "&:hover, &:focus, &$selected": {
      border: `2px solid ${palette.primary.main}`,
      cursor: "default",
    },
  },
  tabPanel: {
    paddingTop: typography.pxToRem(20),
    [breakpoints.up("lg")]: {
      paddingLeft: typography.pxToRem(86),
      width: "calc(100% - 304px)",
    },
  },
}));

export default useStyles;