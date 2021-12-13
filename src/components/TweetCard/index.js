import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useSession } from "next-auth/client";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";
import AddToList from "@/twoopstracker/components/AddToList";

const TweetCard = ({
  owner,
  onClick,
  deleted,
  content,
  retweeted_user_screen_name: retweetedUser,
  number_of_interactions: interaction,
  created_at: createdAt,
  deleted_at: deletedAt,
  results,
  ...props
}) => {
  const classes = useStyles(props);

  const { name, screen_name: screenName, protected: accountStatus } = owner;
  const [session] = useSession();
  const username = name;
  const handle = screenName?.replace(/\s/g, "");
  const accountType = accountStatus ? "Private" : "Public";

  const date1 = new Date(createdAt);
  const date2 = new Date(deletedAt);

  const time = date2 - date1;
  const timeDiff = Math.ceil(time / (1000 * 3600));

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
          {session && <AddToList handle={handle} results={results} />}
        </Grid>
        <Grid item lg={5} sm={12}>
          {createdAt && (
            <Typography>{`Created on ${date1
              .toISOString()
              .substr(0, 10)}`}</Typography>
          )}
          {deleted && (
            <RichTypography className={clsx(classes.text, classes.deleteTime)}>
              {`Deleted after ${timeDiff} hours`}
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
          {`Original tweet by ${retweetedUser}`}
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
  results: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
  deleted_at: PropTypes.string,
  retweeted_user_screen_name: PropTypes.string,
  number_of_interactions: PropTypes.number,
  created_at: PropTypes.string,
  content: PropTypes.string,
  deleted: PropTypes.bool,
};

TweetCard.defaultProps = {
  owner: undefined,
  onClick: undefined,
  content: undefined,
  deleted_at: undefined,
  retweeted_user_screen_name: undefined,
  number_of_interactions: undefined,
  created_at: undefined,
  deleted: undefined,
  results: undefined,
};

export default TweetCard;
