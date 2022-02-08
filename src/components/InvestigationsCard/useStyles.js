import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    marginBottom: typography.pxToRem(40),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(80),
    },
  },
  actionArea: (props) => ({
    display: "flex",
    alignItems: props.featured ? "center" : "flex-start",
    columnGap: typography.pxToRem(60),
  }),
  content: {
    display: "flex",
    flexDirection: "column",
  },
  contentDescription: {
    margin: `${typography.pxToRem(20)} 0`,
    overflow: "hidden",
    boxOrient: "vertical",
    display: "-webkit-box",
    lineClamp: 4,
    [breakpoints.up("md")]: {
      margin: `${typography.pxToRem(30)} 0`,
    },
  },
  contentLink: {
    width: "100%",
  },
  contentTitle: {
    boxOrient: "vertical",
    display: "-webkit-box",
    fontWeight: "bold",
    lineClamp: 3,
    marginTop: 0,
    overflow: "hidden",
    width: "100%",
  },
  media: (props) => {
    return {
      display: "flex",
      flex: "1 0 auto",
      height: typography.pxToRem(props.height),
      width: typography.pxToRem(props.width),
      "& span": {
        boxShadow: `0 4px 8px 0 rgba(0,0,0,0.4)`,
      },
    };
  },
}));

export default useStyles;
