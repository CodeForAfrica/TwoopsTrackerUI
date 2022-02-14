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
  main,
  login,
  logo,
  profilePages,
  accountLink,
  logOutLabel,
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
              <Image height={50} width={184} {...logo} />
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
              main={main}
              login={login}
              profilePages={profilePages}
              accountLink={accountLink}
              logOutLabel={logOutLabel}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

DesktopNavigation.propTypes = {
  logOutLabel: PropTypes.string,
  login: PropTypes.arrayOf(PropTypes.shape({})),
  main: PropTypes.arrayOf(PropTypes.shape({})),
  profilePages: PropTypes.arrayOf(PropTypes.shape({})),
  accountLink: PropTypes.arrayOf(PropTypes.shape({})),
  logo: PropTypes.shape({}),
};

DesktopNavigation.defaultProps = {
  login: undefined,
  main: undefined,
  logOutLabel: undefined,
  logo: undefined,
  profilePages: undefined,
  accountLink: undefined,
};

export default DesktopNavigation;
