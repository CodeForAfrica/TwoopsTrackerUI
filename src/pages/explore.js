import { providers, useSession } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { pagination } from "@/twoopstracker/config";
import { fetchAllResultsWithNext, tweets } from "@/twoopstracker/lib";

export default function Explore({
  days,
  fallback,
  foundTweets,
  tweets: tweetsProp,
  ...props
}) {
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      Router.push("/login");
    }
  }, [session, loading]);

  return (
    <>
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
    </>
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
      providers: await providers(context),
      tweets: defaultTweets,
    },
  };
}
