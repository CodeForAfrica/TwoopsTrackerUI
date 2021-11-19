import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";
import useTweets from "./useTweets";

import Chart from "@/twoopstracker/components/Chart";
import Loading from "@/twoopstracker/components/Loading";
import Pagination from "@/twoopstracker/components/Pagination";
import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";

function getQueryString(query, theme, location, days, page, pageSize) {
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
  if (page) {
    searchParams.append("page", page);
  }
  if (pageSize) {
    searchParams.append("pageSize", pageSize);
  }
  return searchParams.toString();
}

function TweetsContainer({
  days: daysProp,
  foundTweets: foundTweetsProp,
  paginationProps,
  tweets: tweetsProp,
  ...props
}) {
  const classes = useStyles(props);

  const router = useRouter();
  const [days, setDays] = useState();
  const [foundTweets, setfoundTweets] = useState();
  const [location, setLocation] = useState();
  const [page, setPage] = useState();
  const [pageSize, setPageSize] = useState();
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState();
  const [tweets, setTweets] = useState();

  const setStateObject = {
    days: setDays,
    location: setLocation,
    page: setPage,
    pageSize: setPageSize,
    search: setQuery,
    theme: setTheme,
  };

  // Handle initial query parameters from server (if any)
  useEffect(() => {
    const { query: queryParams } = router;
    Object.keys(queryParams).forEach((k) =>
      setStateObject?.[k]?.(queryParams[k])
    );
    // NOTE(kilemensi): Nextjs router shouldn't be a userEffect dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = async () => {
    // NOOP Search is performed automatically whenever parameters change
    //      i.e. handleSelection below triggers search.
  };

  useEffect(() => {
    const queryString = getQueryString(
      query,
      theme,
      location,
      days,
      page,
      pageSize
    );
    const { pathname } = router;
    let newPathname = pathname;
    if (queryString) {
      newPathname = `${newPathname}?${queryString}`;
    }
    router.push(newPathname, newPathname, { shallow: true });
    // NOTE(kilemensi): Nextjs router shouldn't be a userEffect dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, theme, location, days, page, pageSize]);

  const handleSelection = ({ name, value }) => {
    setStateObject[name](value);
  };

  const handleClickPage = (e, value) => {
    setPage(value);
  };
  const handleClickPageSize = (e, value) => {
    setPageSize(value);
  };

  const shouldFetch = () => {
    const queryString = getQueryString(
      query,
      theme,
      location,
      days,
      page,
      pageSize
    );
    let url = "/api/tweets";
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const { tweets: data, isLoading } = useTweets(shouldFetch);
  useEffect(() => {
    if (data) {
      setTweets(data?.tweets);
      setfoundTweets(data?.foundTweets);
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
      <Chart
        days={days || daysProp}
        tweets={foundTweets}
        classes={{ root: classes.chartRoot }}
      />
      <Tweets tweets={tweets} />
      <Pagination
        {...paginationProps}
        count={Math.ceil(tweets?.count / (pageSize || 20))}
        onChangePage={handleClickPage}
        onChangePageSize={handleClickPageSize}
        page={page}
        pageSize={pageSize}
      />
    </>
  );
}

TweetsContainer.propTypes = {
  foundTweets: PropTypes.shape({}),
  days: PropTypes.number,
  paginationProps: PropTypes.shape({}),
  tweets: PropTypes.shape({
    count: PropTypes.number,
  }),
};

TweetsContainer.defaultProps = {
  days: undefined,
  foundTweets: undefined,
  paginationProps: undefined,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

export default TweetsContainer;
