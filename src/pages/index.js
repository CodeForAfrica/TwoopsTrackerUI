import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Page from "@/twoopstracker/components/Page";
import { chartData } from "@/twoopstracker/config";

export default function Index({ ...props }) {
  return (
    <Page {...props}>
      <Chart data={chartData} />
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
export function getStaticProps() {
  return {
    props: {},
  };
}
