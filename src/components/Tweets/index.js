import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Section from "@/twoopstracker/components/Section";
import TweetCard from "@/twoopstracker/components/TweetCard";

const Tweets = ({ tweets, results, ...props }) => {
  const classes = useStyles(props);

  return (
    <Section className={classes.section}>
      {tweets?.results?.length > 0 ? (
        tweets.results.map((tweet) => (
          <TweetCard key={tweet.tweet_id} {...tweet} results={results} />
        ))
      ) : (
        <Typography className={classes.text}>No Tweets Found</Typography>
      )}
    </Section>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  results: PropTypes.arrayOf(PropTypes.shape({})),
};

Tweets.defaultProps = {
  tweets: undefined,
  results: undefined,
};

export default Tweets;
