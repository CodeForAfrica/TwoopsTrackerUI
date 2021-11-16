import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  indicator: {
    width: 0,
  },
  tabs: {
    maxWidth: typography.pxToRem(306),
  },
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
  tabPanel: {},
  tabPanels: {
    marginTop: typography.pxToRem(40),
  },
}));

export default useStyles;
