import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import cover from "@/twoopstracker/assets/images/Rectangle 34.png";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    marginTop: typography.pxToRem(142.5),

    marginBottom: typography.pxToRem(81.5),
    background: palette.background.secondary,
  },
  button: {
    marginTop: typography.pxToRem(80),
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: typography.pxToRem(113),
    paddingBottom: typography.pxToRem(123),
  },
  title: {
    color: palette.text.secondary,
  },
  description: {
    marginTop: typography.pxToRem(62),
    marginBottom: typography.pxToRem(52),
    color: palette.text.secondary,
  },
  investigationtitle: {
    color: palette.text.secondary,
  },
}));

function Investigations({
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
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.description} variant="body1">
          {description}
        </Typography>
        <Grid container spacing={8}>
          {Array.from({ length: 4 }).map(() => (
            <Grid item xs={6} md={3}>
              <Image
                height={369}
                width={297}
                objectFit="contain"
                src={image}
                alt={title}
              />
              <Typography
                className={classes.investigationtitle}
                variant="body1"
              >
                {title}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Button
          className={classes.button}
          href={buttonLink}
          variant="contained"
          color="secondary"
        >
          {buttonText}
        </Button>
      </Section>
    </div>
  );
}

Investigations.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
Investigations.defaultProps = {
  buttonLink: PropTypes.string,
  buttonText: "Read all reports here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: cover,
  title: "Investigations",
};
export default Investigations;
