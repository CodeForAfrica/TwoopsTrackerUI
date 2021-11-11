import PropTypes from "prop-types";
import React from "react";

import Hero from "@/twoopstracker/components/Hero";
import InvestigationList from "@/twoopstracker/components/InvestigationList";
import Page from "@/twoopstracker/components/Page";
import { investigation } from "@/twoopstracker/config";

export default function Investigations({ ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...investigation.banner} />
      <InvestigationList items={investigation.items} />
    </Page>
  );
}

Investigations.propTypes = {
  fallback: PropTypes.arrayOf(PropTypes.shape({})),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Investigations.defaultProps = {
  fallback: undefined,
  tweets: undefined,
};

export function getStaticProps() {
  return {
    props: { investigation },
  };
}
