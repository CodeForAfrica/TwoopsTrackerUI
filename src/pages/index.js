import PropTypes from "prop-types";
import React from "react";

import Banner from "@/twoopstracker/components/Banner";
import CallToAction from "@/twoopstracker/components/CallToAction";
import Investigations from "@/twoopstracker/components/Investigations";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";

export default function Index({ ...props }) {
  return (
    <Page {...props}>
      <Banner />
      <CallToAction />
      <Investigations />
      <Partners />
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
