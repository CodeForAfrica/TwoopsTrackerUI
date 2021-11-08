import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";

import Loading from "@/twoopstracker/components/Loading";
import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";
import { fetchSearchTweets } from "@/twoopstracker/lib";

const TweetsContainer = (props) => {
  const classes = useStyles(props);

  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState([]);
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const stateObject = {
    date: setDate,
    theme: setTheme,
    location: setLocation,
    search: setSearch,
  };

  const searchTweets = async () => {
    setIsLoading(true);
    const data = await fetchSearchTweets(search, date, theme, location);

    setTweets(data);
    setIsLoading(false);
  };

  const handleSelection = ({ name, value }) => {
    stateObject[name](value);
  };

  useEffect(() => {
    const { data } = props;
    setTweets(data);
    setIsLoading(false);
  }, [props]);

  return (
    <>
      <SearchSection
        onSearch={searchTweets}
        handleSelection={handleSelection}
      />
      {isLoading && <Loading />}
      {tweets.length > 0 ? (
        <Tweets tweets={tweets} />
      ) : (
        <Typography className={classes.text}>No Tweets Found</Typography>
      )}
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
