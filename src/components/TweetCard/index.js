import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";

const TweetCard = ({
  owner,
  deleted,
  content,
  retweeted_user_screen_name: retweetedUser,
  number_of_interactions: interaction,
  created_at: createdAt,
  ...props
}) => {
  const classes = useStyles(props);

  const { name, screen_name: screenName, protected: accountStatus } = owner;

  const username = name;
  const handle = screenName.replace(/\s/g, "");
  const accountType = accountStatus ? "Private" : "Public";

  return (
    <div className={classes.root}>
      <Grid container className={classes.section}>
        <Grid item lg={1}>
          <div className={classes.icon}>
            <Image layout="fill" src={UserIcon} />
          </div>
        </Grid>
        <Grid item lg={5} sm={12} className={classes.detailSection}>
          <Typography className={classes.username}>{username}</Typography>
          <RichTypography className={classes.handle}>
            {`@${handle}`}
          </RichTypography>
          <Typography className={classes.accountType}>{accountType}</Typography>
          <Typography className={classes.list}>Add to List</Typography>
        </Grid>
        <Grid item lg={5} sm={12}>
          <Typography>{`Created at ${createdAt}`}</Typography>
          {deleted && (
            <RichTypography className={clsx(classes.text, classes.deleteTime)}>
              Deleted after xxmin about two hours ago
            </RichTypography>
          )}
          <Typography className={clsx(classes.text, classes.interaction)}>
            {`Number of Interactions: ${interaction}`}
          </Typography>
        </Grid>
      </Grid>
      <RichTypography className={classes.retweet}>{content}</RichTypography>
      {retweetedUser && (
        <RichTypography className={classes.originalTweet}>
          Original tweet by
        </RichTypography>
      )}
    </div>
  );
};

TweetCard.propTypes = {
  owner: PropTypes.shape({
    screen_name: PropTypes.string,
    name: PropTypes.string,
    protected: PropTypes.bool,
  }),
  likes_count: PropTypes.number,
  retweets_count: PropTypes.number,
  replies_count: PropTypes.number,
  retweeted_user_screen_name: PropTypes.string,
  number_of_interactions: PropTypes.number,
  created_at: PropTypes.string,
  content: PropTypes.string,
  deleted: PropTypes.bool,
};

TweetCard.defaultProps = {
  owner: undefined,
  content: undefined,
  likes_count: undefined,
  retweets_count: undefined,
  retweeted_user_screen_name: undefined,
  number_of_interactions: undefined,
  replies_count: undefined,
  created_at: undefined,
  deleted: undefined,
};

export default TweetCard;
