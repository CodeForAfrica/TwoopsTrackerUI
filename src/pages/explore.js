import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { pagination } from "@/twoopstracker/config";
import { tweets, tweetsInsights } from "@/twoopstracker/lib";
import createChartImage from "@/twoopstracker/lib/createChartImage";
import getQueryString from "@/twoopstracker/utils/getQueryString";

function Explore({
  days,
  fallback,
  insights,
  location,
  page,
  pageSize,
  query,
  theme,
  tweets: tweetsProp,
  ...props
}) {
  return (
    <Page {...props}>
      <SWRConfig value={{ fallback }}>
        <TweetsContainer
          days={days}
          insights={insights}
          location={location}
          page={page}
          pageSize={pageSize}
          paginationProps={pagination}
          query={query}
          theme={theme}
          tweets={tweetsProp}
        />
      </SWRConfig>
    </Page>
  );
}

Explore.propTypes = {
  days: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fallback: PropTypes.shape({}),
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  location: PropTypes.string,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  query: PropTypes.string,
  theme: PropTypes.number,
  tweets: PropTypes.shape({}),
};

Explore.defaultProps = {
  days: undefined,
  fallback: undefined,
  insights: undefined,
  location: undefined,
  page: undefined,
  pageSize: undefined,
  query: undefined,
  theme: undefined,
  tweets: undefined,
};

export async function getServerSideProps(context) {
  const { query: userQuery } = context;
  const query = { days: 14, ...userQuery };
  const session = await getSession(context);
  const foundTweets = await tweets(query, session);
  const insights = await tweetsInsights(query, session);
  const queryString = getQueryString(query);
  const searchQueryString = queryString ? `?${queryString}` : "";

  const { pageSize, page, ...unpaginatedQuery } = query;
  const unpaginatedQueryString = getQueryString(unpaginatedQuery);

  const { image, title, description } = await createChartImage(
    insights,
    unpaginatedQuery
  );
  const url = `${process.env.NEXT_PUBLIC_APP_URL}explore?${unpaginatedQueryString}`;
  const openGraph = {
    title,
    description,
    url,
    images: [{ url: image }],
  };
  const twitter = {
    cartType: "summary_large_image",
  };

  return {
    props: {
      ...query,
      description,
      fallback: {
        [`/api/tweets${searchQueryString}`]: foundTweets,
        [`/api/tweets/insights${searchQueryString}`]: insights,
      },
      image,
      insights,
      openGraph,
      session,
      title,
      tweets: foundTweets,
      twitter,
    },
  };
}

export default Explore;
