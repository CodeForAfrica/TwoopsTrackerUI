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
import getQueryString from "@/twoopstracker/utils/getQueryString";

function TweetsContainer({
  days: daysProp,
  insights: insightsProp,
  paginationProps,
  tweets: tweetsProp,
  ...props
}) {
  const classes = useStyles(props);

  const router = useRouter();
  const [days, setDays] = useState();
  const [insights, setInsights] = useState();
  const [location, setLocation] = useState();
  const [page, setPage] = useState();
  const [paginating, setPaginating] = useState(false);
  const [pageSize, setPageSize] = useState();
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState();
  const [tweets, setTweets] = useState();

  const setStateObject = {
    days: setDays,
    location: setLocation,
    page: setPage,
    pageSize: setPageSize,
    query: setQuery,
    theme: setTheme,
  };

  // Handle initial query parameters from server (if any)
  useEffect(() => {
    if (router.isReady) {
      const { query: queryParams } = router;
      Object.keys(queryParams).forEach((k) =>
        setStateObject?.[k]?.(queryParams[k])
      );
      console.log("BOOMR", { router });
    }
    // NOTE(kilemensi): Nextjs router shouldn't be a userEffect dependenc
    //                  e.g. https://github.com/vercel/next.js/issues/18127
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const handleSearch = async () => {
    // NOOP Search is performed automatically whenever parameters change
    //      i.e. handleSelection below triggers search.
  };

  useEffect(() => {
    if (router.isReady) {
      const queryString = getQueryString({
        query,
        theme,
        location,
        days,
        page,
        pageSize,
      });
      const { pathname } = router;
      let newPathname = pathname;
      if (queryString) {
        newPathname = `${newPathname}?${queryString}`;
      }
      router.push(newPathname, newPathname, { shallow: true });
      console.log("BOOMW", { router });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, theme, location, days, page, pageSize, router.isReady]);

  const handleSelection = ({ name, value }) => {
    setStateObject[name](value);
    setPaginating(false);
  };

  const handleClickPage = (e, value) => {
    setPage(value);
    setPaginating(true);
  };
  const handleClickPageSize = (e, value) => {
    // Changing pageSize triggers computation of number of pages.
    setPage(1);
    setPageSize(value);
    setPaginating(true);
  };

  const handleSaveSearch = async (name) => {
    await fetch(`/api/searches`, {
      method: "POST",
      body: JSON.stringify({
        query,
        theme,
        location,
        days,
        name,
      }),
    });
  };

  const shouldFetch = () => {
    const queryString = getQueryString({
      query,
      theme,
      location,
      days,
      page,
      pageSize,
    });
    let url = "/api/tweets";
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const { data: newTweets, isLoading: isLoadingTweets } =
    useTweets(shouldFetch);
  useEffect(() => {
    if (newTweets) {
      setTweets(newTweets);
    }
  }, [newTweets]);
  const shouldFetchInsights = () => {
    if (paginating) {
      return null;
    }

    const queryString = getQueryString({ query, theme, location, days });
    let url = "/api/tweets/insights";
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const { data: newInsights, isLoading: isLoadingInsights } =
    useTweets(shouldFetchInsights);
  useEffect(() => {
    if (newInsights) {
      setInsights(newInsights);
    }
  }, [newInsights]);
  const isLoading = isLoadingTweets || isLoadingInsights;
  console.log("BOOMF", { router });

  return (
    <>
      <SearchSection
        days={days}
        handleSelection={handleSelection}
        handleSaveSearch={handleSaveSearch}
        location={location}
        onSearch={handleSearch}
        theme={theme}
        className={classes.root}
      />
      {isLoading && <Loading />}
      <Chart data={insights} classes={{ root: classes.chartRoot }} />
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
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  days: PropTypes.number,
  paginationProps: PropTypes.shape({}),
  tweets: PropTypes.shape({
    count: PropTypes.number,
  }),
};

TweetsContainer.defaultProps = {
  days: undefined,
  insights: undefined,
  paginationProps: undefined,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

export default TweetsContainer;
