import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import Image from "@/twoopstracker/components/Image";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    position: "relative",
    width: "100%",
    [breakpoints.up("md")]: {
      height: typography.pxToRem(322),
      width: typography.pxToRem(228),
    },
  },
  image: {},
}));

function Media({ image, imageProps, media: mediaProp, ...props }) {
  const classes = useStyles(props);
  const media = image || mediaProp;

  if (!media) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Image
        layout="fill"
        src={media}
        {...imageProps}
        className={classes.image}
      />
    </div>
  );
}

Media.propTypes = {
  image: PropTypes.node,
  imageProps: PropTypes.shape({}),
  media: PropTypes.node,
};

Media.defaultProps = {
  image: undefined,
  imageProps: undefined,
  media: undefined,
};

export default Media;
