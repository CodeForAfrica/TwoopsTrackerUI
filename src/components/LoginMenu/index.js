import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Link from "@/twoopstracker/components/Link";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    [breakpoints.up("lg")]: {
      padding: 0,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  links: {
    marginTop: "0.5rem",
    borderRadius: 0,
  },
  label: {
    fontSize: typography.pxToRem(24),
    fontFamily: typography.h4.fontFamily,
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "149.49%",
    textAlign: "right",
    textTransform: "capitalize",
  },
  menu: {
    margin: 0,
    [breakpoints.up("lg")]: {
      marginRight: typography.pxToRem(15),
    },
  },
  text: {
    "&::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
    "&:hover::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transition: "margin 0.3s ease",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
  },
  menuLinks: {
    color: "black",
    margin: `${typography.pxToRem(10)} ${typography.pxToRem(-8)}`,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("lg")]: {
      padding: `${typography.pxToRem(7)} ${typography.pxToRem(18)}`,
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
}));

function LoginMenu({ links, children, ...props }) {
  const classes = useStyles(props);

  if (!links?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      {links.map((item) => (
        <Grid item key={item.label} className={classes.menu}>
          <Button
            component={Link}
            color="default"
            variant="text"
            size="large"
            href={item.href}
            classes={{
              root: classes.menuLinks,
              text: classes.text,
            }}
          >
            <Typography variant="body1" className={classes.label}>
              {item.label}
            </Typography>
          </Button>
        </Grid>
      ))}
    </div>
  );
}

LoginMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  children: PropTypes.node,
};

LoginMenu.defaultProps = {
  children: undefined,
};
export default LoginMenu;
