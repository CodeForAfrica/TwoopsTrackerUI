import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";

const TweetsContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState(null);
  // const [date, setDate] = useState("");
  // const [theme, setTheme] = useState("");
  // const [location, setLocation] = useState("");

  const searchTweets = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const { data } = props;
    setTweets(data);
    setIsLoading(false);
  }, [props]);

  return (
    <>
      <SearchSection onSearch={searchTweets} />
      {isLoading ? <div>Loading...</div> : <Tweets tweets={tweets} />}
    </>
  );
};

TweetsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

TweetsContainer.defaultProps = {
  data: undefined,
};

export default TweetsContainer;
