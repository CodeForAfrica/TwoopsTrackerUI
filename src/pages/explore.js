import { providers, useSession } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { fetchAllResultsWithNext, tweets } from "@/twoopstracker/lib";

export default function Explore({
  days,
  fallback,
  tweets: tweetsProp,
  foundTweets,
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
            tweets={tweetsProp}
            days={days}
            foundTweets={foundTweets}
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
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Explore.defaultProps = {
  foundTweets: undefined,
  days: undefined,
  fallback: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getServerSideProps(context) {
  const days = 14;
  const defaultTweets = await tweets({ days });

  const fetchTweets = async () => tweets({ days, pageSize: 100 });
  const foundTweets = await fetchAllResultsWithNext(fetchTweets);

  return {
    props: {
      providers: await providers(context),
      tweets: defaultTweets,
      foundTweets,
      days,
      fallback: {
        "/api/tweets": { tweets: defaultTweets, foundTweets },
      },
    },
  };
}
