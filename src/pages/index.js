import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Page from "@/twoopstracker/components/Page";
import { search } from "@/twoopstracker/lib";

export default function Index({ ...props }) {
  return (
    <Page {...props}>
      <Chart {...props} />
    </Page>
  );
}

Index.propTypes = {
  fallback: PropTypes.arrayOf(PropTypes.shape({})),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  fallback: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getStaticProps() {
  const tweets = await search({ days: 14 });
  return {
    props: {
      tweets,
    },
    revalidate: 15 * 50, // 15 minutes
  };
}
