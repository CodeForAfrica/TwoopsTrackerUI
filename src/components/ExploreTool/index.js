import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    marginTop: typography.pxToRem(60),
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("xl")]: {
      marginTop: typography.pxToRem(90),
      marginBottom: typography.pxToRem(90),
    },
  },
  section: {},
  title: {
    color: palette.text.primary,
  },
  description: {
    marginTop: typography.pxToRem(35),
    marginBottom: typography.pxToRem(35),
    [breakpoints.up("xl")]: {
      width: typography.pxToRem(561),
    },
  },
  imageGrid: {
    marginTop: typography.pxToRem(35),
    [breakpoints.up("xl")]: {
      marginTop: 0,
    },
  },
}));

function ExploreTool({
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
        <Grid container>
          <Grid item xl={5}>
            <Typography className={classes.title} variant="h2">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
            <Button href={buttonLink} variant="contained" color="primary">
              {buttonText}
            </Button>
          </Grid>
          <Grid item xl={7} className={classes.imageGrid}>
            <Image height={436} width={790} src={image} alt={title} />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

ExploreTool.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
ExploreTool.defaultProps = {
  buttonLink: undefined,
  buttonText: undefined,
  description: undefined,
  image: undefined,
  title: undefined,
};
export default ExploreTool;