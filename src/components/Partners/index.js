import { Typography, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, breakpoints }) => ({
  root: {
    marginTop: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(107),
    },
  },
  image: {
    width: "100%",
    filter: "grayscale(1)",
    [breakpoints.up("md")]: {
      width: "unset",
    },
  },
  imageContainer: {
    justifyContent: "center",
    marginTop: typography.pxToRem(30),
    [breakpoints.up("md")]: {
      marginTop: "unset",
      justifyContent: "flex-end",
    },
  },
  logos: {
    backgroundColor: "#CBCBCB33",
    padding: `${typography.pxToRem(100)} 0`,
  },
  section: {
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      marginBottom: typography.pxToRem(111),
    },
  },
  description: {
    marginTop: typography.pxToRem(50),
    [breakpoints.up("md")]: {
      marginTop: typography.pxToRem(118),
    },
  },
}));

function Partners({ images, logos, title, description, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
          </Grid>
          <Grid
            className={classes.imageContainer}
            container
            alignItems="flex-start"
            item
            xs={12}
            md={6}
          >
            {images.map((image) => (
              <Image
                className={classes.image}
                height={170}
                width={450}
                objectFit="contain"
                src={image}
                alt={title}
              />
            ))}
          </Grid>
        </Grid>
      </Section>
      <div className={classes.logos}>
        <Section>
          {logos.map((logo) => (
            <Image
              className={classes.image}
              height={170}
              width={380}
              objectFit="contain"
              src={logo}
              alt={title}
            />
          ))}
        </Section>
      </div>
    </div>
  );
}

Partners.propTypes = {
  description: PropTypes.string,
  images: PropTypes.string,
  logos: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};
Partners.defaultProps = {
  description: undefined,
  images: undefined,
  logos: undefined,
  title: undefined,
};
export default Partners;
