import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    flexGrow: 1,
    [breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  indicator: {
    width: 0,
    background: "transparent",
  },
  vertical: {
    background: "transparent",
  },
  tabs: {},
  tab: {
    color: palette.secondary.main,
    fontWeight: 400,
    fontSize: typography.h4.fontSize,
    padding: typography.pxToRem(10),
    margin: typography.pxToRem(3),
    textAlign: "left",
    height: typography.pxToRem(51),
    opacity: 1,
    border: "1px solid #D0D0D0",
    "&:hover, &:focus, &$selected": {
      border: `2px solid ${palette.primary.main}`,
    },
    minWidth: typography.pxToRem(150),
    [breakpoints.up("md")]: {
      width: typography.pxToRem(304),
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
    paddingTop: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(20),
      paddingLeft: typography.pxToRem(86),
      width: "calc(100% - 304px)",
    },
  },
}));

export default useStyles;
