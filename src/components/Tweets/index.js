import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import TweetCard from "@/twoopstracker/components/TweetCard";

function Tweets({ tweets, ...props }) {
  const classes = useStyles(props);

  return (
    <Section className={classes.section}>
      {tweets?.results?.length > 0 ? (
        tweets.results.map((tweet) => (
          <TweetCard
            key={tweet.tweet_id}
            seeLessLabel="See less"
            originalTweetText="Original tweet by"
            {...tweet}
            {...props}
          />
        ))
      ) : (
        <Typography className={classes.text}>No Tweets Found</Typography>
      )}
    </Section>
  );
}

Tweets.propTypes = {
  tweets: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

Tweets.defaultProps = {
  tweets: undefined,
};

export default Tweets;
