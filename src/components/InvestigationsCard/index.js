import { Grid } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Card from "@/twoopstracker/components/Card";
import Content from "@/twoopstracker/components/Card/Content";

function InvestigationsCard({
  featured,
  description,
  href,
  image,
  imageProps,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const contentProps = {
    ctaText: "View Pdf",
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
  featured: PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
  ctaText: PropTypes.string,
  imageProps: PropTypes.shape({}),
};
InvestigationsCard.defaultProps = {
  featured: false,
  description: undefined,
  title: undefined,
  image: undefined,
  href: undefined,
  ctaText: undefined,
  imageProps: undefined,
};
export default InvestigationsCard;
