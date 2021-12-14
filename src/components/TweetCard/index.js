import { RichTypography } from "@commons-ui/core";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { format, formatDistanceStrict, formatDistance } from "date-fns";
import { useSession } from "next-auth/client";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";
import AddToList from "@/twoopstracker/components/AddToList";
import Link from "@/twoopstracker/components/Link";

const TweetCard = ({
  owner,
  onClick,
  deleted,
  content: contentProp,
  retweeted_user_screen_name: retweetedUser,
  retweet_id: retweetId,
  number_of_interactions: interaction,
  created_at: createdAt,
  deleted_at: deletedAt,
  results,
  ...props
}) => {
  const classes = useStyles(props);

  const {
    name,
    screen_name: screenName,
    protected: accountStatus,
    profile_image_url: profileImage,
  } = owner;
  const [session] = useSession();
  const username = name;
  const handle = screenName?.replace(/\s/g, "");
  const accountType = accountStatus ? "Private" : "Public";

  const created = format(new Date(createdAt), "MM/dd/yyyy HH:mm:ss").split(" ");
  const timeDiff = formatDistanceStrict(
    new Date(deletedAt),
    new Date(createdAt)
  );
  const timeAgo = formatDistance(new Date(deletedAt), new Date(), {
    addSuffix: true,
  });

  const content = contentProp
    .replace(/^RT/, '<span class="highlight">Retweet</span>')
    .replace(/#(\w+)/g, '<span class="highlight">#$1</span>')
    .replace(/@(\w+)/g, '<span class="highlight">@$1</span>');

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item container lg={8} alignItems="center">
          <Grid item className={classes.icon}>
            <Image layout="fill" src={profileImage || UserIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h4">{username}</Typography>
            <div className={classes.handleDetail}>
              <RichTypography className={classes.handle}>
                {`@${handle}`}
              </RichTypography>
              <Typography className={classes.accountType}>
                {accountType}
              </Typography>
            </div>
            {session && <AddToList handle={handle} results={results} />}
          </Grid>
        </Grid>
        <Grid item lg={4}>
          {createdAt && (
            <Typography variant="body2">{`Created on ${created[0]} at ${created[1]}`}</Typography>
          )}
          {deleted && (
            <RichTypography
              variant="body2"
              className={clsx(classes.text, classes.deleteTime)}
            >
              {`Deleted after ${timeDiff}`}{" "}
              <span className="highlight">{timeAgo}</span>
            </RichTypography>
          )}
          <Typography
            variant="body2"
            className={clsx(classes.text, classes.interactions)}
          >
            {`Number of Interactions: ${interaction}`}
          </Typography>
        </Grid>
      </Grid>
      <RichTypography className={classes.retweet}>{content}</RichTypography>
      {retweetedUser && (
        <RichTypography variant="body2">
          Original tweet by
          {` `}
          <Link
            href={`https://twitter.com/${username}/status/${retweetId}`}
            underline="none"
          >
            {retweetedUser}
          </Link>
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
    profile_image_url: PropTypes.string,
  }),
  results: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
  deleted_at: PropTypes.string,
  retweet_id: PropTypes.number,
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
  retweet_id: undefined,
  retweeted_user_screen_name: undefined,
  number_of_interactions: undefined,
  created_at: undefined,
  deleted: undefined,
  results: undefined,
};

export default TweetCard;
