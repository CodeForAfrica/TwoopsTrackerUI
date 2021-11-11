import PropTypes from "prop-types";
import React from "react";

import AboutContent from "@/twoopstracker/components/AboutContent";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { resources } from "@/twoopstracker/config";

export default function Resources({ ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...resources.banner} />
      <AboutContent items={resources.items} />
    </Page>
  );
}

Resources.propTypes = {
  fallback: PropTypes.arrayOf(PropTypes.shape({})),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Resources.defaultProps = {
  fallback: undefined,
  tweets: undefined,
};

export function getStaticProps() {
  return {
    props: {},
  };
}
