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
  width,
  height,
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
    titleProps: {
      variant: featured ? "h2" : "h4",
    },
  };

  return (
    <Grid wrap="nowrap" container className={classes.root}>
      <Grid item>
        <Card
          image={image}
          width={width}
          height={height}
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
  width: PropTypes.number,
  height: PropTypes.number,
};

InvestigationsCard.defaultProps = {
  ctaText: "View Investigation",
  description: undefined,
  featured: false,
  href: undefined,
  image: undefined,
  imageProps: undefined,
  title: undefined,
  width: undefined,
  height: undefined,
};

export default InvestigationsCard;
