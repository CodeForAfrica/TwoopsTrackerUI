import PropTypes from "prop-types";
import React from "react";

import Hero from "@/twoopstracker/components/Hero";
import InvestigationList from "@/twoopstracker/components/InvestigationList";
import Page from "@/twoopstracker/components/Page";
import * as md from "@/twoopstracker/lib/md";
import { settings } from "@/twoopstracker/lib/settings";
import content from "content/pages/investigations.md";

export default function Investigations({ investigations, ...props }) {
  const { description, title } = props;

  return (
    <Page {...props}>
      <Hero description={description} title={title} withCTA={false} />
      <InvestigationList items={investigations} />
    </Page>
  );
}

Investigations.propTypes = {
  description: PropTypes.string,
  investigations: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

Investigations.defaultProps = {
  description: undefined,
  investigations: undefined,
  title: undefined,
};

export async function getStaticProps() {
  const { attributes } = content;
  attributes.investigations =
    attributes.investigations
      ?.map(({ cta, name, thumbnail, url, ...others }) => ({
        ctaText: cta,
        image: thumbnail,
        href: url,
        title: name,
        ...others,
      }))
      ?.map((i) => md.renderObjectValuesInline(i)) ?? null;
  const siteSettings = settings();

  return {
    props: {
      ...siteSettings,
      ...attributes,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}
