import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";
// import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { pagination } from "@/twoopstracker/config";
import { tweets, tweetsInsights } from "@/twoopstracker/lib";

function Explore({ days, fallback, insights, tweets: tweetsProp, ...props }) {
  return (
    <Page {...props}>
      {/* <SWRConfig value={{ fallback }}> */}
      <TweetsContainer
        days={days}
        insights={insights}
        tweets={tweetsProp}
        paginationProps={pagination}
      />
      {/* </SWRConfig> */}
    </Page>
  );
}

Explore.propTypes = {
  days: PropTypes.number,
  fallback: PropTypes.shape({}),
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  query: PropTypes.shape({}),
  tweets: PropTypes.shape({}),
};

Explore.defaultProps = {
  days: undefined,
  fallback: undefined,
  insights: undefined,
  query: undefined,
  tweets: undefined,
};

export async function getServerSideProps(context) {
  const days = 14;
  const session = await getSession(context);
  const foundTweets = await tweets({ days }, session);
  const insights = await tweetsInsights({ days }, session);

  return {
    props: {
      days,
      // fallback: {
      //   "/api/tweets": foundTweets,
      //   "/api/tweets/insights": insights,
      // },
      insights,
      session,
      title: "Explore",
      tweets: foundTweets,
    },
  };
}

export default Explore;
