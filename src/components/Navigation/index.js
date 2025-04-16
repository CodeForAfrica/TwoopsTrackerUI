import { AppBar, Box, Toolbar } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
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
      padding: `${typography.pxToRem(8)} 0`,
      [breakpoints.up("md")]: {
        padding: `${typography.pxToRem(23)} 0`,
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
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          className={classes.navigation}
        >
          <DesktopNavigation
            {...props}
            logo={logo?.desktop || logo}
            classes={{ section: classes.section }}
          />
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
          className={classes.navigation}
        >
          <MobileNavigation {...props} {...props} logo={logo?.mobile || logo} />
        </Box>
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
