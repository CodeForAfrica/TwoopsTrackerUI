import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Page from "@/twoopstracker/components/Page";
import { search } from "@/twoopstracker/lib";

export default function Index({ days, tweets, ...props }) {
  return (
    <Page {...props}>
      <Chart tweets={tweets} days={days} />
    </Page>
  );
}

Index.propTypes = {
  days: PropTypes.number,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  days: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getStaticProps() {
  const days = 14;
  const tweets = await search({ days });

  return {
    props: {
      tweets,
      days,
    },
    revalidate: 15 * 50, // 15 minutes
  };
}
