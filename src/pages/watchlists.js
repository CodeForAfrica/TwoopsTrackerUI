import PropTypes from "prop-types";
import React from "react";

import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { watchlists } from "@/twoopstracker/config";

function Watchlists({ watchlists: watchlistsProp, ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...watchlistsProp.banner} />
    </Page>
  );
}

Watchlists.propTypes = {
  watchlists: PropTypes.shape({}),
};

Watchlists.defaultProps = {
  watchlists: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      description: watchlists?.banner?.description ?? null,
      watchlists,
      title: "Watchlists",
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Watchlists;
