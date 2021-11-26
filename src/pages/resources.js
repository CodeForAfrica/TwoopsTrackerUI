import PropTypes from "prop-types";
import React from "react";

import AboutContent from "@/twoopstracker/components/AboutContent";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { resources } from "@/twoopstracker/config";

function Resources({ resources: resourcesProp, ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...resourcesProp.banner} />
      <AboutContent items={resourcesProp.items} />
    </Page>
  );
}

Resources.propTypes = {
  resources: PropTypes.shape({}),
};

Resources.defaultProps = {
  resources: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      resources,
      title: "Resources",
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Resources;
