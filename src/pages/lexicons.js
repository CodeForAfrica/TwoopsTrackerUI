import PropTypes from "prop-types";
import React from "react";

import Content from "@/twoopstracker/components/Content";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { lexicons } from "@/twoopstracker/config";

function Resources({ lexicons: lexiconsProp, ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...lexiconsProp.banner} />
      <Content size="large" items={lexiconsProp.items} />
    </Page>
  );
}

Resources.propTypes = {
  lexicons: PropTypes.shape({}),
};

Resources.defaultProps = {
  lexicons: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      description: lexicons?.banner?.description ?? null,
      lexicons,
      title: "Lexicons",
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Resources;
