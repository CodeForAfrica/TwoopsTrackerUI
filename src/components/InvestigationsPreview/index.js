import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

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
    marginTop: typography.pxToRem(39),
    marginBottom: typography.pxToRem(80),
    color: palette.text.secondary,
    fontWeight: 400,
  },
  investigationtitle: {
    color: palette.text.secondary,
    fontWeight: "bold",
  },
}));

function InvestigationsPreview({
  items,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}) {
  const classes = useStyles(props);

  if (!items?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography align="center" className={classes.description} variant="h4">
          {description}
        </Typography>
        <Grid container spacing={8}>
          {items.slice(0, 4).map(({ image, title: bookTitle }) => (
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
                {bookTitle}
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

InvestigationsPreview.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.string,
  title: PropTypes.string,
};
InvestigationsPreview.defaultProps = {
  buttonLink: undefined,
  buttonText: undefined,
  description: undefined,
  items: undefined,
  title: undefined,
};
export default InvestigationsPreview;