import { providers, useSession } from "next-auth/client";
import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { search } from "@/twoopstracker/lib";

export default function Explore({ fallback, tweets, ...props }) {
  const [session] = useSession();

  useEffect(() => {
    if (!session) {
      Router.push("/login");
    }
  }, [session]);

  return (
    <>
      <Page {...props}>
        <SWRConfig value={{ fallback }}>
          <TweetsContainer tweets={tweets} />
        </SWRConfig>
      </Page>
    </>
  );
}

Explore.propTypes = {
  fallback: PropTypes.arrayOf(PropTypes.shape({})),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Explore.defaultProps = {
  fallback: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getServerSideProps(context) {
  const tweets = await search();

  return {
    props: {
      providers: await providers(context),
      tweets,
      fallback: {
        "/api/search": tweets,
      },
    },
  };
}
