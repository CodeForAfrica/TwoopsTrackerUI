import { providers, useSession } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { pagination } from "@/twoopstracker/config";
import { tweets } from "@/twoopstracker/lib";

export default function Explore({
  days,
  fallback,
  insights,
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
    <Page {...props}>
      <SWRConfig value={{ fallback }}>
        <TweetsContainer
          days={days}
          insights={insights}
          tweets={tweetsProp}
          paginationProps={pagination}
        />
      </SWRConfig>
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
  const results = await tweets({ days });

  return {
    props: {
      ...results,
      days,
      fallback: {
        "/api/tweets": results,
      },
      providers: await providers(context),
    },
  };
}
