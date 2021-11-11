import { Typography, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(107),

    marginBottom: typography.pxToRem(111),
  },
  section: {},
  description: {
    marginTop: typography.pxToRem(118),
  },
}));

function Partners({ images, title, description, ...props }) {
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
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            item
            xs={12}
            md={6}
          >
            {images.map((image) => (
              <Image
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
    </div>
  );
}

Partners.propTypes = {
  description: PropTypes.string,
  images: PropTypes.string,
  title: PropTypes.string,
};
Partners.defaultProps = {
  description: undefined,
  images: undefined,
  title: undefined,
};
export default Partners;
