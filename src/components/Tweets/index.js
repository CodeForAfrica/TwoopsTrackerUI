import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";
import TweetCard from "@/twoopstracker/components/TweetCard";

const Tweets = ({ data }) => {
  return (
    <Section>
      {data.map((tweet) => (
        <TweetCard key={tweet.username} {...tweet} />
      ))}
    </Section>
  );
};

Tweets.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

Tweets.defaultProps = {
  data: undefined,
};

export default Tweets;
