import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import trollImage from "@/twoopstracker/assets/images/Trolltracker showcase 1.png";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(142.5),

    marginBottom: typography.pxToRem(81.5),
  },
  section: {},
  description: {
    marginTop: typography.pxToRem(62),
    marginBottom: typography.pxToRem(52),
  },
}));

function CallToAction({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Image height={376} width={870} src={image} alt={title} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography className={classes.title} variant="h4">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
            <Button href={buttonLink} variant="contained" color="primary">
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

CallToAction.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
CallToAction.defaultProps = {
  buttonLink: PropTypes.string,
  buttonText: "Sign up",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
  image: trollImage,
  title: "Get more data today!",
};
export default CallToAction;
