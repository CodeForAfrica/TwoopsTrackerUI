import LogoButton from "@commons-ui/core/LogoButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/twoopstracker/components/Image";
import Link from "@/twoopstracker/components/Link";
import Menu from "@/twoopstracker/components/Menu";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(() => ({
  root: {},
  logoButton: {
    paddingLeft: 0,
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
    },
  },
  section: {},
}));

function DesktopNavigation({
  menuProps,
  desktopLogoProps,
  loginMenuProps,
  profileList,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <LogoButton
              component={Link}
              href="/"
              className={classes.logoButton}
            >
              <Image {...desktopLogoProps} />
            </LogoButton>
          </Grid>
          <Grid
            item
            xs={9}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Menu
              links={menuProps}
              loginMenuProps={loginMenuProps}
              profileList={profileList}
            />
          </Grid>
          <Grid />
          <Grid />
        </Grid>
      </Section>
    </div>
  );
}

DesktopNavigation.propTypes = {
  menuProps: PropTypes.arrayOf(PropTypes.shape({})),
  loginMenuProps: PropTypes.arrayOf(PropTypes.shape({})),
  profileList: PropTypes.arrayOf(PropTypes.shape({})),
  desktopLogoProps: PropTypes.shape({
    alt: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

DesktopNavigation.defaultProps = {
  menuProps: undefined,
  loginMenuProps: undefined,
  desktopLogoProps: undefined,
  profileList: undefined,
};

export default DesktopNavigation;
