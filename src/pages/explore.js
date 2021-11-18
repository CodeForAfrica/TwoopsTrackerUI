import { providers, useSession } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { tweets } from "@/twoopstracker/lib";

export default function Explore({
  days,
  fallback,
  tweets: tweetsProp,
  allTweets,
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
            allTweets={allTweets}
          />
        </SWRConfig>
      </Page>
    </>
  );
}

Explore.propTypes = {
  allTweets: PropTypes.arrayOf(PropTypes.shape({})),
  days: PropTypes.number,
  fallback: PropTypes.shape({}),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Explore.defaultProps = {
  allTweets: undefined,
  days: undefined,
  fallback: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getServerSideProps(context) {
  const days = 14;
  const { tweets: defaultTweets, allTweets } = await tweets({ days });

  return {
    props: {
      providers: await providers(context),
      tweets: defaultTweets,
      allTweets,
      days,
      fallback: {
        "/api/tweets": { tweets: defaultTweets, allTweets },
      },
    },
  };
}
