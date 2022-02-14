import { getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { paginationOptions } from "@/twoopstracker/config";
import { tweets, tweetsInsights, lists } from "@/twoopstracker/lib";
import {
  settings,
  explore,
  searchSection,
  addToList,
} from "@/twoopstracker/lib/cms";
import createChartImage from "@/twoopstracker/lib/createChartImage";
import getQueryString from "@/twoopstracker/utils/getQueryString";
import site from "@/twoopstracker/utils/site";

function Explore({
  category,
  days,
  fallback,
  insights,
  location,
  page,
  pageSize,
  query,
  theme,
  tweets: tweetsProp,
  results,
  sort,
  ...props
}) {
  return (
    <Page {...props}>
      <SWRConfig value={{ fallback }}>
        <TweetsContainer
          category={category}
          days={days}
          insights={insights}
          location={location}
          page={page}
          pageSize={pageSize}
          paginationProps={paginationOptions}
          query={query}
          theme={theme}
          tweets={tweetsProp}
          results={results}
          sort={sort}
          {...props}
        />
      </SWRConfig>
    </Page>
  );
}

Explore.propTypes = {
  category: PropTypes.string,
  days: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fallback: PropTypes.shape({}),
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.string,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  query: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({})),
  sort: PropTypes.string,
  theme: PropTypes.number,
  tweets: PropTypes.shape({}),
};

Explore.defaultProps = {
  category: undefined,
  days: undefined,
  fallback: undefined,
  insights: undefined,
  location: undefined,
  page: undefined,
  pageSize: undefined,
  query: undefined,
  results: undefined,
  sort: undefined,
  theme: undefined,
  tweets: undefined,
};

export async function getServerSideProps(context) {
  let results = null;
  const { query: userQuery } = context;
  const query = {
    days: 14,
    sort: "-deleted-at",
    ...userQuery,
  };
  const session = await getSession(context);
  const foundTweets = await tweets(query, session);
  const insights = await tweetsInsights(query, session);
  const queryString = getQueryString(query);
  const searchQueryString = queryString ? `?${queryString}` : "";
  if (session) {
    results = await lists(session, { pageSize: 10 });
  }

  const { pageSize, page, ...unpaginatedQuery } = query;
  const unpaginatedQueryString = getQueryString(unpaginatedQuery);

  const image = await createChartImage(insights, unpaginatedQuery);

  const url = `${site.environmentUrl}/explore?${unpaginatedQueryString}`;
  const openGraph = {
    url,
    images: [{ url: image }],
  };
  const twitter = {
    cartType: "summary_large_image",
  };

  return {
    props: {
      ...settings(),
      ...explore(),
      ...searchSection(),
      ...addToList(),
      ...query,
      fallback: {
        [`/api/tweets${searchQueryString}`]: foundTweets,
        [`/api/tweets/insights${searchQueryString}`]: insights,
      },
      image,
      insights,
      openGraph,
      session,
      title: "Explore",
      tweets: foundTweets,
      twitter,
      url,
      results,
    },
  };
}

export default Explore;
