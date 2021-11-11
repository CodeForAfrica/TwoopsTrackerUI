import { Card as MuiCard } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import CardActionArea from "./ActionArea";
import CardContent from "./Content";
import CardMedia from "./Media";
import useStyles from "./useStyles";

const Card = ({
  children,
  className,
  ctaText,
  description,
  descriptionProps,
  href,
  image,
  imageProps,
  linkProps,
  media,
  mediaProps,
  onClick,
  title,
  titleProps,
  variant,
  ...props
}) => {
  const classes = useStyles({ ...props });
  const actionAreaProps = { href, onClick };
  const contentProps = {
    ctaText,
    description,
    descriptionProps,
    href,
    linkProps,
    title,
    titleProps,
  };

  return (
    <MuiCard elevation={0} square className={clsx(classes.root, className)}>
      <CardActionArea
        {...actionAreaProps}
        classes={{
          root: classes.actionArea,
          focusHighlight: classes.actionAreaFocusHighlight,
          focusVisible: classes.actionAreaFocusVisible,
        }}
      >
        <CardMedia
          {...mediaProps}
          image={image}
          imageProps={imageProps}
          media={media}
          classes={{ root: classes.media, image: classes.mediaImage }}
        />
        <CardContent
          {...contentProps}
          classes={{
            root: classes.content,
            description: classes.contentDescription,
            link: classes.contentLink,
            title: classes.contentTitle,
          }}
        />
      </CardActionArea>
    </MuiCard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ctaText: PropTypes.string,
  description: PropTypes.string,
  descriptionProps: PropTypes.shape({}),
  href: PropTypes.string,
  image: PropTypes.string,
  imageProps: PropTypes.shape({}),
  linkProps: PropTypes.shape({}),
  media: PropTypes.string,
  mediaProps: PropTypes.shape({
    square: PropTypes.bool,
  }),
  onClick: PropTypes.func,
  title: PropTypes.string,
  titleProps: PropTypes.shape({}),
  variant: PropTypes.oneOf(["image", "embed"]),
};

Card.defaultProps = {
  children: undefined,
  className: undefined,
  ctaText: undefined,
  description: undefined,
  descriptionProps: undefined,
  href: undefined,
  image: undefined,
  imageProps: undefined,
  linkProps: undefined,
  media: undefined,
  mediaProps: undefined,
  onClick: undefined,
  variant: "image",
  title: undefined,
  titleProps: undefined,
};

export default Card;
