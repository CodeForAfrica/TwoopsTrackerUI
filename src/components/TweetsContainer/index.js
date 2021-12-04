import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import useStyles from "./useStyles";
import useTweets from "./useTweets";

import Chart from "@/twoopstracker/components/Chart";
import ContentActions from "@/twoopstracker/components/ContentActions";
import Loading from "@/twoopstracker/components/Loading";
import Pagination from "@/twoopstracker/components/Pagination";
import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";
import getQueryString from "@/twoopstracker/utils/getQueryString";

function TweetsContainer({
  days: daysProp,
  insights: insightsProp,
  location: locationProp,
  page: pageProp,
  pageSize: pageSizeProp,
  paginationProps,
  query: queryProp,
  theme: themeProp,
  tweets: tweetsProp,
  ...props
}) {
  const classes = useStyles(props);

  const router = useRouter();
  const [days, setDays] = useState(daysProp);
  const [insights, setInsights] = useState(insightsProp);
  const [location, setLocation] = useState(locationProp);
  const [page, setPage] = useState(pageProp);
  const [paginating, setPaginating] = useState(false);
  const [pageSize, setPageSize] = useState(pageSizeProp);
  const [query, setQuery] = useState(queryProp);
  const [search, setSearch] = useState(false);
  const [theme, setTheme] = useState(themeProp);
  const [tweets, setTweets] = useState(tweetsProp);

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
    }
    // NOTE(kilemensi): Nextjs router shouldn't be a userEffect dependenc
    //                  e.g. https://github.com/vercel/next.js/issues/18127
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const handleSearch = async () => {
    setSearch(true);
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, theme, location, days, page, pageSize, router.isReady]);

  const handleSelection = ({ name, value }) => {
    setSearch(false);
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
    if (!search) {
      return null;
    }

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
    if (paginating || !search) {
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

  return (
    <>
      <SearchSection
        days={days}
        onSelection={handleSelection}
        onSaveSearch={handleSaveSearch}
        location={location}
        onSearch={handleSearch}
        theme={theme}
        className={classes.root}
      />
      {isLoading && <Loading />}
      <Chart {...props} data={insights} classes={{ root: classes.chartRoot }} />
      {tweets?.results?.length > 0 && (
        <ContentActions
          apiUri="/api/tweets"
          queryParams={{ query, theme, location, days }}
          type="tweets"
        />
      )}
      <Tweets tweets={tweets} />
      {tweets?.results?.length > 0 && (
        <Pagination
          {...paginationProps}
          count={Math.ceil(tweets?.count / (pageSize || 20))}
          onChangePage={handleClickPage}
          onChangePageSize={handleClickPageSize}
          page={page}
          pageSize={pageSize}
        />
      )}
    </>
  );
}

TweetsContainer.propTypes = {
  days: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.string,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paginationProps: PropTypes.shape({}),
  query: PropTypes.string,
  theme: PropTypes.number,
  tweets: PropTypes.shape({
    count: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

TweetsContainer.defaultProps = {
  days: undefined,
  insights: undefined,
  location: undefined,
  page: undefined,
  pageSize: undefined,
  paginationProps: undefined,
  query: undefined,
  theme: undefined,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

export default TweetsContainer;
