import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";
import TweetCard from "@/twoopstracker/components/TweetCard";

const Tweets = ({ tweets }) => {
  return (
    <Section>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.tweet_id} {...tweet} />
      ))}
    </Section>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Tweets.defaultProps = {
  tweets: undefined,
};

export default Tweets;
