import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { pagination } from "@/twoopstracker/config";
import { fetchAllResultsWithNext, tweets } from "@/twoopstracker/lib";

export default function Explore({
  fallback,
  tweets: tweetsProp,
  foundTweets,
  days,
  ...props
}) {
  return (
    <Page {...props}>
      <SWRConfig value={{ fallback }}>
        <TweetsContainer
          days={days}
          foundTweets={foundTweets}
          tweets={tweetsProp}
          paginationProps={pagination}
        />
      </SWRConfig>
    </Page>
  );
}

Explore.propTypes = {
  foundTweets: PropTypes.arrayOf(PropTypes.shape({})),
  days: PropTypes.number,
  fallback: PropTypes.shape({}),
  query: PropTypes.shape({}),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Explore.defaultProps = {
  foundTweets: undefined,
  days: undefined,
  fallback: undefined,
  query: undefined,
  tweets: undefined,
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });

  if (!(session && res && session?.user)) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
    return null;
  }

  const days = 14;
  const defaultTweets = await tweets({ days });

  const fetchTweets = async () => tweets({ days, pageSize: 100 });
  const foundTweets = await fetchAllResultsWithNext(fetchTweets);

  return {
    props: {
      days,
      fallback: {
        "/api/tweets": { tweets: defaultTweets, foundTweets: defaultTweets },
      },
      foundTweets,
      tweets: defaultTweets,
    },
  };
}
