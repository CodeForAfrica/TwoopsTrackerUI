import { Grid } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/twoopstracker/components/Card";
import Content from "@/twoopstracker/components/Card/Content";

function InvestigationsCard({
  ctaText,
  description,
  featured,
  href,
  image,
  imageProps,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const contentProps = {
    ctaText,
    description,
    href,
    title,
    titleProps: { variant: "body1" },
  };

  return (
    <Grid wrap="nowrap" container className={classes.root}>
      <Grid item>
        <Card
          image={image}
          classes={{
            root: classes.card,
            media: clsx({
              [classes.media]: true,
              [classes.featured]: featured,
            }),
          }}
        />
      </Grid>
      <Grid item className={classes.content}>
        <Content
          {...contentProps}
          classes={{
            description: classes.description,
            title: classes.title,
          }}
        />
      </Grid>
    </Grid>
  );
}

InvestigationsCard.propTypes = {
  ctaText: PropTypes.string,
  description: PropTypes.string,
  featured: PropTypes.bool,
  href: PropTypes.string,
  image: PropTypes.string,
  imageProps: PropTypes.shape({}),
  title: PropTypes.string,
};

InvestigationsCard.defaultProps = {
  ctaText: "View Investigation",
  description: undefined,
  featured: false,
  href: undefined,
  image: undefined,
  imageProps: undefined,
  title: undefined,
};

export default InvestigationsCard;
