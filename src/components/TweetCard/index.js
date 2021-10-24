import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const TweetCard = ({
  retweet,
  originalTweet,
  username,
  handle,
  listDescription,
  posted,
  deleted,
  interactions,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Grid container className={classes.section}>
        <Grid item lg={1}>
          <div className={classes.icon}>
            <Image layout="fill" src={UserIcon} />
          </div>
        </Grid>
        <Grid item lg={5} className={classes.detailSection}>
          <Typography className={classes.username}>{username}</Typography>
          <RichTypography className={classes.handle}>{handle}</RichTypography>
          <Typography className={classes.list}>{listDescription}</Typography>
        </Grid>
        <Grid item lg={5}>
          <Typography>{posted}</Typography>
          <RichTypography className={clsx(classes.text, classes.deleteTime)}>
            {deleted}
          </RichTypography>
          <Typography className={clsx(classes.text, classes.interaction)}>
            {interactions}
          </Typography>
        </Grid>
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
  username: PropTypes.string,
  handle: PropTypes.string,
  listDescription: PropTypes.string,
  posted: PropTypes.string,
  deleted: PropTypes.string,
  interactions: PropTypes.string,
};

TweetCard.defaultProps = {
  retweet: undefined,
  originalTweet: undefined,
  username: undefined,
  handle: undefined,
  listDescription: undefined,
  posted: undefined,
  deleted: undefined,
  interactions: undefined,
};

export default TweetCard;
