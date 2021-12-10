import { AppBar, Hidden, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const useStyles = makeStyles(
  ({ palette, typography, zIndex, breakpoints }) => ({
    root: {
      backgroundColor: palette.background.default,
      zIndex: zIndex.modal,
    },
    section: {},
    toolbar: {
      display: "flex",
      alignItems: "center",
      padding: `0`,
      [breakpoints.up("lg")]: {
        padding: `${typography.pxToRem(12)} 0`,
      },
    },
    navigation: {
      flexGrow: 1,
    },
  })
);

function Navigation({ logo, ...props }) {
  const classes = useStyles(props);

  return (
    <AppBar color="primary" position="sticky" className={classes.root}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Hidden mdDown implementation="css" className={classes.navigation}>
          <DesktopNavigation
            {...props}
            logo={logo?.desktop || logo}
            classes={{ section: classes.section }}
          />
        </Hidden>
        <Hidden lgUp implementation="css" className={classes.navigation}>
          <MobileNavigation {...props} {...props} logo={logo?.mobile || logo} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Navigation.propTypes = {
  logo: PropTypes.shape({
    desktop: PropTypes.shape({}),
    mobile: PropTypes.shape({}),
  }),
};

Navigation.defaultProps = {
  logo: undefined,
};

export default Navigation;
