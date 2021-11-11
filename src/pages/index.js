import PropTypes from "prop-types";
import React from "react";

import Hero from "@/twoopstracker/components/Hero";
import InvestigationsPreview from "@/twoopstracker/components/InvestigationsPreview";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";
import SignUp from "@/twoopstracker/components/SignUp";
import { home } from "@/twoopstracker/config";

export default function Index({ ...props }) {
  return (
    <Page {...props}>
      <Hero {...home.hero} />
      <SignUp {...home.signup} />
      <InvestigationsPreview {...home.investigation} />
      <Partners {...home.partners} />
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
