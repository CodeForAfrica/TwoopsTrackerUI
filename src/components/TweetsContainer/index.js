import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";

const TweetsContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState(null);
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");
  const [location, setLocation] = useState("");
  const stateObject = {
    date: setDate,
    theme: setTheme,
    location: setLocation,
  };

  const searchTweets = async () => {
    setIsLoading(true);
    let url = `https://dev.investigate.africa/v1/tweets/?location=${location}&&query=${theme}`;

    if (date) {
      const newDate = new Date();
      const today = newDate.toISOString().substr(0, 10);

      newDate.setDate(newDate.getDate() - date);
      const pastDate = newDate.toISOString().substr(0, 10);

      url = `${url}&&startDate=${pastDate}&&endDate=${today}`;
    }
    const res = await fetch(url);
    const data = await res.json();

    setTweets(data);
    setIsLoading(false);
  };

  const handleFilter = ({ name, value }) => {
    stateObject[name](value);
  };

  useEffect(() => {
    const { data } = props;
    setTweets(data);
    setIsLoading(false);
  }, [props]);

  return (
    <>
      <SearchSection onSearch={searchTweets} handleFilter={handleFilter} />
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
