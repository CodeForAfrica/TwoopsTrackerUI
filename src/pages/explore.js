import Router from "next/router";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { SWRConfig } from "swr";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { search } from "@/twoopstracker/lib";
import useSession from "@/twoopstracker/lib/useSession";

export default function Explore({ fallback, tweets, ...props }) {
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
          <TweetsContainer tweets={tweets} />
        </SWRConfig>
      </Page>
    </>
  );
}

Explore.propTypes = {
  fallback: PropTypes.shape({}),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Explore.defaultProps = {
  fallback: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getServerSideProps() {
  const tweets = await search({});

  return {
    props: {
      tweets,
      fallback: {
        "/api/search": tweets,
      },
    },
  };
}
