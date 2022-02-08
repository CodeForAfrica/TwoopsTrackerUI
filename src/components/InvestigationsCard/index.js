import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import Card from "@/twoopstracker/components/Card";

// NOTE(kilemensi): This is a workaround for this component styles to be loaded
//                  after Card styles so that style-override works.
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

function InvestigationsCard({
  className,
  ctaText,
  description,
  href,
  image,
  imageProps,
  title,
  ...props
}) {
  const classes = useStyles(props);
  const { featured, height, width } = props;
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
    <Card
      {...contentProps}
      image={image}
      width={width}
      height={height}
      classes={{
        root: clsx(classes.root, className),
        actionArea: classes.actionArea,
        media: classes.media,
        content: classes.content,
        contentDescription: classes.contentDescription,
        contentLink: classes.contentLink,
        contentTitle: classes.contentTitle,
      }}
    />
  );
}

InvestigationsCard.propTypes = {
  className: PropTypes.string,
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
  className: undefined,
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
