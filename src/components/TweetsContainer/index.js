import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";
import useTweets from "./useTweets";

import Loading from "@/twoopstracker/components/Loading";
import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";

function getQueryString(query, theme, location, days) {
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
  }
  if (theme) {
    searchParams.append("theme", theme);
  }
  if (location) {
    searchParams.append("location", location);
  }
  if (days) {
    searchParams.append("days", days);
  }
  return searchParams.toString();
}

function TweetsContainer({ tweets: tweetsProp, ...props }) {
  const classes = useStyles(props);

  const router = useRouter();
  const [tweets, setTweets] = useState(tweetsProp);
  const [days, setDays] = useState();
  const [theme, setTheme] = useState();
  const [location, setLocation] = useState();
  const [query, setSearch] = useState("");

  const stateObject = {
    days: setDays,
    theme: setTheme,
    location: setLocation,
    search: setSearch,
  };

  // Handle initial query parameters from server (if any)
  useEffect(() => {
    const { query: queryParams } = router;
    Object.keys(queryParams).forEach((k) => stateObject?.[k]?.(queryParams[k]));
    // NOTE(kilemensi): Nextjs router shouldn't be a userEffect dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async () => {
    // NOOP Search is performed automatically whenever parameters change
    //      i.e. handleSelection below triggers search.
  };

  useEffect(() => {
    const queryString = getQueryString(query, theme, location, days);
    const { pathname } = router;
    let newPathname = pathname;
    if (queryString) {
      newPathname = `${newPathname}?${queryString}`;
    }
    router.push(newPathname, newPathname, { shallow: true });
    // NOTE(kilemensi): Nextjs router shouldn't be a userEffect dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, theme, location, days]);

  const handleSelection = ({ name, value }) => {
    stateObject[name](value);
  };

  const shouldFetch = () => {
    const queryString = getQueryString(query, theme, location, days);
    let url = "/api/search";
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const { tweets: data, isLoading } = useTweets(shouldFetch);
  useEffect(() => {
    if (data) {
      setTweets(data);
    }
  }, [data]);

  return (
    <>
      <SearchSection
        days={days}
        handleSelection={handleSelection}
        location={location}
        onSearch={handleSearch}
        theme={theme}
        className={classes.root}
      />
      {isLoading && <Loading />}
      <Tweets tweets={tweets} />
    </>
  );
}

TweetsContainer.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

TweetsContainer.defaultProps = {
  tweets: undefined,
};

export default TweetsContainer;