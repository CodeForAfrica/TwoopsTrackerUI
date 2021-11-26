import { Button, makeStyles, Typography } from "@material-ui/core";
import { useSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import backgroundImage from "@/twoopstracker/assets/images/banner background.png";
import Link from "@/twoopstracker/components/Link";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {
    backgroundImage: `url('${backgroundImage.src || backgroundImage}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right bottom",
    width: "100%",
  },
  button: {
    marginRight: typography.pxToRem(60),
    marginBottom: typography.pxToRem(8),
  },
  buttonContainer: {
    display: "flex",
    marginTop: typography.pxToRem(40),
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(90),
    },
  },
  title: {
    width: typography.pxToRem(1000),
    maxWidth: "80%",
  },
  description: {
    color: palette.text.secondary,
    marginTop: typography.pxToRem(40),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(90),
    },
  },
  section: {
    paddingTop: typography.pxToRem(90),
    paddingBottom: typography.pxToRem(90),
    [breakpoints.up("lg")]: {
      paddingTop: typography.pxToRem(117),
      paddingBottom: typography.pxToRem(127),
    },
  },
}));

function Hero({
  title,
  description,
  searchLabel,
  searchLink,
  signUpLabel,
  signUpLink,
  withCTA,
  ...props
}) {
  const classes = useStyles(props);
  const [session] = useSession();
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography className={classes.title} variant="h1">
          {title}
        </Typography>
        <Typography className={classes.description} variant="h3">
          {description}
        </Typography>
        {withCTA && (
          <div className={classes.buttonContainer}>
            <Button
              component={Link}
              href={searchLink}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              {searchLabel}
            </Button>
            {!session ? (
              <Button
                component={Link}
                href={signUpLink}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                {signUpLabel}
              </Button>
            ) : null}
          </div>
        )}
      </Section>
    </div>
  );
}

Hero.propTypes = {
  description: PropTypes.string,
  searchLabel: PropTypes.string,
  searchLink: PropTypes.string,
  signUpLabel: PropTypes.string,
  signUpLink: PropTypes.string,
  title: PropTypes.string,
  withCTA: PropTypes.string,
};

Hero.defaultProps = {
  signUpLabel: undefined,
  signUpLink: undefined,
  description: undefined,
  searchLabel: undefined,
  searchLink: undefined,
  title: undefined,
  withCTA: true,
};

export default Hero;
