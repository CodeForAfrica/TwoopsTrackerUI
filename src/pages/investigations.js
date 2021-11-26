import PropTypes from "prop-types";
import React from "react";

import Hero from "@/twoopstracker/components/Hero";
import InvestigationList from "@/twoopstracker/components/InvestigationList";
import Page from "@/twoopstracker/components/Page";
import { investigation } from "@/twoopstracker/config";

export default function Investigations({
  investigation: investigationProp,
  ...props
}) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...investigationProp.banner} />
      <InvestigationList items={investigationProp.items} />
    </Page>
  );
}

Investigations.propTypes = {
  investigation: PropTypes.shape({}),
};

Investigations.defaultProps = {
  investigation: undefined,
};

Investigations.propTypes = {
  fallback: PropTypes.arrayOf(PropTypes.shape({})),
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Investigations.defaultProps = {
  fallback: undefined,
  tweets: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      description: investigation?.banner?.description ?? null,
      investigation,
      title: "Investigations",
    },
    revalidate: 15 * 60, // 15 minutes
  };
}
