import { Typography, Button, Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Figure from "@/twoopstracker/components/Figure";
import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    marginTop: typography.pxToRem(60),
    marginBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
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
  },
  figure: {
    marginTop: typography.pxToRem(35),
    height: typography.pxToRem(322.25),
    width: typography.pxToRem(584),
    [breakpoints.up("md")]: {
      marginTop: 0,
    },
    [breakpoints.up("lg")]: {
      height: typography.pxToRem(403),
      width: typography.pxToRem(731),
    },
    [breakpoints.up("xl")]: {
      height: typography.pxToRem(436.2),
      width: typography.pxToRem(790.5),
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
        <Grid container justifyContent="space-between">
          <Grid item md={5} lg={4} xl={5}>
            <Typography className={classes.title} component="h2" variant="h1">
              {title}
            </Typography>
            <Typography className={classes.description} variant="body1">
              {description}
            </Typography>
            <Button href={buttonLink} variant="contained" color="primary">
              {buttonText}
            </Button>
          </Grid>
          <Grid item>
            <Figure src={image} alt={title} className={classes.figure} />
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
