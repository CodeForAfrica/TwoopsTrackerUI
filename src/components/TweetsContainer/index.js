import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import useTweets from "./useTweets";

import Chart from "@/twoopstracker/components/Chart";
import ContentActions from "@/twoopstracker/components/ContentActions";
import Loading from "@/twoopstracker/components/Loading";
import Pagination from "@/twoopstracker/components/Pagination";
import SearchResults from "@/twoopstracker/components/SearchResults";
import SearchSection from "@/twoopstracker/components/SearchSection";
import Tweets from "@/twoopstracker/components/Tweets";
import getQueryString from "@/twoopstracker/utils/getQueryString";

// NOTE(kilemensi): We need this component styles to load after Chart component
//                  styles so that overriding works.
// eslint-disable-next-line import/order
import useStyles from "./useStyles";

function TweetsContainer({
  category: categoryProp,
  days: daysProp,
  insights: insightsProp,
  location: locationProp,
  page: pageProp,
  pageSize: pageSizeProp,
  paginationProps,
  query: queryProp,
  sort: sortProp,
  theme: themeProp,
  tweets: tweetsProp,
  ...props
}) {
  const classes = useStyles(props);

  const router = useRouter();
  const [days, setDays] = useState(daysProp);
  const [category, setCategory] = useState(categoryProp);
  const [insights, setInsights] = useState(insightsProp);
  const [location, setLocation] = useState(locationProp);
  const [page, setPage] = useState(pageProp);
  // Changes which page is displayed when either page or sort is changed.
  const [paginating, setPaginating] = useState(false);
  const [pageSize, setPageSize] = useState(pageSizeProp);
  const [query, setQuery] = useState(queryProp);
  const [searching, setSearching] = useState(false);
  const [theme, setTheme] = useState(themeProp);
  const [tweets, setTweets] = useState(tweetsProp);
  const [sort, setSort] = useState(sortProp);
  const contentRef = useRef();

  const setStateObject = {
    category: setCategory,
    days: setDays,
    location: setLocation,
    page: setPage,
    pageSize: setPageSize,
    query: setQuery,
    theme: setTheme,
    sort: setSort,
  };

  // Handle initial query parameters from server (if any)
  useEffect(() => {
    if (router.isReady) {
      const { query: queryParams } = router;
      Object.keys(queryParams).forEach((k) =>
        setStateObject?.[k]?.(queryParams[k])
      );
    }
    // NOTE(kilemensi): Nextjs router shouldn't be a useEffect dependency
    //                  e.g. https://github.com/vercel/next.js/issues/18127
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const handleSearch = async () => {
    setPaginating(false);
    setSearching(true);
  };

  useEffect(() => {
    if (router.isReady) {
      const queryString = getQueryString({
        query,
        category,
        theme,
        location,
        days,
        page,
        pageSize,
        sort,
      });
      const { pathname } = router;
      let newPathname = pathname;
      if (queryString) {
        newPathname = `${newPathname}?${queryString}`;
      }
      router.push(newPathname, newPathname, { shallow: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    query,
    theme,
    category,
    location,
    days,
    page,
    pageSize,
    sort,
    router.isReady,
  ]);

  const handleSelection = ({ name, value }) => {
    setStateObject[name](value);
    setPaginating(false);
    setSearching(false);
  };

  const handleChangeSortBy = ({ value }) => {
    setSort((prevSort) => {
      const sortOrder = prevSort.startsWith("-") ? "-" : "";
      return `${sortOrder}${value}`;
    });
    setPaginating(true);
    setSearching(false);
  };

  const paginate = (newPage) => {
    if (newPage) {
      setPage(newPage);
    }
    setPaginating(true);
    setSearching(false);
  };

  const handleClickSortOrder = (e) => {
    e.preventDefault();

    setSort((prevSort) => {
      const sortOrder = prevSort.startsWith("-") ? "" : "-";
      const sortBy = prevSort.replace(/^-/, "");

      return `${sortOrder}${sortBy}`;
    });
    paginate();
  };

  const handleClickPage = (e, value) => {
    paginate(value);
  };

  const handleClickPageSize = (e, value) => {
    // Changing pageSize triggers computation of number of pages.
    setPageSize(value);
    paginate(1);
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
        sort,
      }),
    });
  };

  const shouldFetch = () => {
    if (!(paginating || searching)) {
      return null;
    }

    let url = "/api/tweets";
    const queryString = getQueryString({
      query,
      theme,
      location,
      days,
      page,
      pageSize,
      category,
      sort,
    });
    if (queryString) {
      url = `${url}?${queryString}`;
    }
    return url;
  };
  const { data: newTweets, isLoading: isLoadingTweets } =
    useTweets(shouldFetch);
  useEffect(() => {
    if (newTweets) {
      setTweets({ ...newTweets });
    }
  }, [newTweets, paginating]);
  useEffect(() => {
    if (paginating && contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [paginating, tweets]);

  const shouldFetchInsights = () => {
    if (paginating || !searching) {
      return null;
    }

    const queryString = getQueryString({
      query,
      theme,
      location,
      days,
    });
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
      setInsights([...newInsights]);
    }
  }, [newInsights]);

  const isLoading = isLoadingTweets || isLoadingInsights;

  return (
    <>
      <SearchSection
        days={days}
        location={location}
        onSelection={handleSelection}
        onSaveSearch={handleSaveSearch}
        onSearch={handleSearch}
        query={query}
        theme={theme}
        className={classes.root}
      />
      {isLoading && <Loading />}
      <Chart {...props} data={insights} className={classes.chartRoot} />
      <SearchResults query={query} label="Search Results" />
      {tweets?.results?.length > 0 && (
        <ContentActions
          apiUri="/api/tweets"
          queryParams={{ query, theme, location, days, sort }}
          type="tweets"
          sort={sort}
          onChangeSortBy={handleChangeSortBy}
          onClickSortOrder={handleClickSortOrder}
          ref={contentRef}
          className={classes.content}
        />
      )}
      <Tweets tweets={tweets} />
      {tweets?.results?.length > 0 && (
        <Pagination
          {...paginationProps}
          count={Math.ceil((tweets?.count ?? 0) / (pageSize || 20))}
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
  category: PropTypes.string,
  days: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.string,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paginationProps: PropTypes.shape({}),
  query: PropTypes.string,
  sort: PropTypes.string,
  theme: PropTypes.number,
  tweets: PropTypes.shape({
    count: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};

TweetsContainer.defaultProps = {
  category: undefined,
  days: undefined,
  insights: undefined,
  location: undefined,
  page: undefined,
  pageSize: undefined,
  paginationProps: undefined,
  query: undefined,
  sort: undefined,
  theme: undefined,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

export default TweetsContainer;
