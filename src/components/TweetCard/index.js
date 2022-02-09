import { RichTypography } from "@commons-ui/core";
import { Button, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { format, formatDistanceStrict, formatDistance } from "date-fns";
import { useSession } from "next-auth/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

import UserIcon from "@/twoopstracker/assets/icons/user.svg";
import AddToList from "@/twoopstracker/components/AddToList";
import Figure from "@/twoopstracker/components/Figure";
import Link from "@/twoopstracker/components/Link";

// NOTE(kilemensi): This is a workaround for this component styles to be loaded
//                  after Figure styles so that we can override Figure styles.
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

function TweetCard({
  owner,
  onClick,
  deleted,
  addToListLabel,
  successLabel,
  seeLessLabel,
  originalTweetText,
  content: contentProp,
  retweeted_user_screen_name: retweetedUser,
  retweet_id: retweetId,
  number_of_interactions: interaction,
  created_at: createdAt,
  deleted_at: deletedAt,
  results,
  tweet_id: tweetId,
  ...props
}) {
  const classes = useStyles(props);
  const [expanded, setExpanded] = useState(false);

  const { data: session } = useSession();
  const {
    name,
    screen_name: screenName,
    protected: accountStatus,
    profile_image_url: profileImageNormal,
  } = owner;

  // NOTE(kilemensi): Since our card size is bigger than _bigger size from
  //                  alternative size offered by Twitter, we need to use
  //                  original size if avaiable.
  // see: https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
  const profileImage = profileImageNormal?.replace("_normal", "");
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

  const handleMore = () => {
    setExpanded((prev) => !prev);
  };

  const handleReflow = ({ clamped }) => {
    if (clamped) {
      const moreButton = document.getElementById(`${tweetId}-more-button`);
      if (moreButton) {
        moreButton.onclick = () => handleMore();
      }
    }
  };

  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item container lg={8} alignItems="center">
          <Grid item>
            <Figure src={profileImage || UserIcon} className={classes.icon} />
          </Grid>
          <Grid item>
            <Typography variant="h4">{username}</Typography>
            <div className={classes.handleDetail}>
              <RichTypography className={classes.handle}>
                <Link href={`https://twitter.com/${handle}`} underline="none">
                  {`@${handle}`}
                </Link>
              </RichTypography>
              <Typography className={classes.accountType}>
                {accountType}
              </Typography>
            </div>
            {session && (
              <AddToList
                handle={handle}
                addToListLabel={addToListLabel}
                successLabel={successLabel}
                results={results}
              />
            )}
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
      <div className={classes.content}>
        <HTMLEllipsis
          unsafeHTML={content}
          maxLine={expanded ? 10 : 2}
          ellipsis="..."
          ellipsisHTML={`... <button class="moreButton" id="${tweetId}-more-button">See More</button>`}
          onReflow={handleReflow}
          basedOn="letters"
        />
        {expanded && (
          <Button onClick={handleMore} className={classes.seeLessButton}>
            {seeLessLabel}
          </Button>
        )}
      </div>
      {retweetedUser && (
        <RichTypography variant="body2">
          {originalTweetText}
          {` `}
          <Link
            href={`https://twitter.com/${retweetedUser.slice(
              1
            )}/status/${retweetId}`}
            underline="none"
          >
            {retweetedUser}
          </Link>
        </RichTypography>
      )}
    </div>
  );
}

TweetCard.propTypes = {
  owner: PropTypes.shape({
    screen_name: PropTypes.string,
    name: PropTypes.string,
    protected: PropTypes.bool,
    profile_image_url: PropTypes.string,
  }),
  successLabel: PropTypes.string,
  addToListLabel: PropTypes.string,

  results: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
  deleted_at: PropTypes.string,
  seeLessLabel: PropTypes.string,
  originalTweetText: PropTypes.string,
  retweet_id: PropTypes.number,
  retweeted_user_screen_name: PropTypes.string,
  number_of_interactions: PropTypes.number,
  created_at: PropTypes.string,
  content: PropTypes.string,
  deleted: PropTypes.bool,
  tweet_id: PropTypes.number,
};

TweetCard.defaultProps = {
  owner: undefined,
  onClick: undefined,
  content: undefined,
  successLabel: undefined,
  addToListLabel: undefined,
  seeLessLabel: undefined,
  originalTweetText: undefined,
  deleted_at: undefined,
  retweet_id: undefined,
  retweeted_user_screen_name: undefined,
  number_of_interactions: undefined,
  created_at: undefined,
  deleted: undefined,
  results: undefined,
  tweet_id: undefined,
};

export default TweetCard;
