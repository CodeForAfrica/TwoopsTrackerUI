import { Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import backgroundImage from "@/twoopstracker/assets/images/banner background.png";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  root: {
    backgroundImage: `url('${backgroundImage.src}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    width: "100%",
    height: typography.pxToRem(500),
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(757),
    },
  },
  button: {
    marginRight: typography.pxToRem(60),
  },
  buttonContainer: {
    display: "flex",
    marginTop: typography.pxToRem(90),
  },
  title: {
    width: typography.pxToRem(1000),
  },
  description: {
    color: palette.text.secondary,
    marginTop: typography.pxToRem(90),
  },
  section: {
    paddingTop: typography.pxToRem(117),
  },
}));

function Banner({
  title,
  description,
  searchLabel,
  searchLink,
  signUpLabel,
  signUpLink,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography className={classes.title} variant="h1">
          {title}
        </Typography>
        <Typography className={classes.description} variant="h3">
          {description}
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            {searchLabel}
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            {signUpLabel}
          </Button>
        </div>
      </Section>
    </div>
  );
}

Banner.propTypes = {
  signUpLabel: PropTypes.string,
  signUpLink: PropTypes.string,
  description: PropTypes.string,
  searchLabel: PropTypes.string,
  searchLink: PropTypes.string,
  title: PropTypes.string,
};
Banner.defaultProps = {
  signUpLabel: "Search the Data",
  signUpLink: PropTypes.string,
  description: "Let’s keep disinformation agents accountable.",
  searchLabel: "Sign Up",
  searchLink: PropTypes.string,
  title: "Track disinformation actors and trolls!",
};

export default Banner;
