import { RichTypography } from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const TweetCard = ({ retweet, originalTweet, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid>
        <div className={classes.icon}>
          <Image layout="fill" src={UserIcon} />
        </div>
      </Grid>
      <RichTypography className={classes.retweet}>{retweet}</RichTypography>
      <RichTypography className={classes.originalTweet}>
        {originalTweet}
      </RichTypography>
    </div>
  );
};

TweetCard.propTypes = {
  retweet: PropTypes.string,
  originalTweet: PropTypes.string,
};

TweetCard.defaultProps = {
  retweet: undefined,
  originalTweet: undefined,
};

export default TweetCard;
