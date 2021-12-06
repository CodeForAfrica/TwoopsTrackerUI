import PropTypes from "prop-types";
import React from "react";

import Hero from "@/twoopstracker/components/Hero";
import InvestigationList from "@/twoopstracker/components/InvestigationList";
import Page from "@/twoopstracker/components/Page";
import { investigations, settings } from "@/twoopstracker/lib/cms";

export default function Investigations({ reports, ...props }) {
  const { description, title } = props;

  return (
    <Page {...props}>
      <Hero description={description} title={title} withCTA={false} />
      <InvestigationList items={reports} />
    </Page>
  );
}

Investigations.propTypes = {
  description: PropTypes.string,
  reports: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

Investigations.defaultProps = {
  description: undefined,
  reports: undefined,
  title: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
      ...investigations(),
    },
    revalidate: 15 * 60, // 15 minutes
  };
}
