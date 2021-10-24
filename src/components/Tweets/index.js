import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";
import TweetCard from "@/twoopstracker/components/TweetCard";

const Tweets = ({ tweets }) => {
  return (
    <Section>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.username} {...tweet} />
      ))}
    </Section>
  );
};

Tweets.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      handle: PropTypes.string,
      retweet: PropTypes.string,
      originalTweet: PropTypes.string,
      posted: PropTypes.string,
      deleted: PropTypes.string,
      listDescription: PropTypes.string,
      interactions: PropTypes.string,
    })
  ),
};

Tweets.defaultProps = {
  tweets: undefined,
};

export default Tweets;
