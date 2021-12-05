import PropTypes from "prop-types";
import React from "react";

import Content from "@/twoopstracker/components/Content";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import * as md from "@/twoopstracker/lib/md";
import { settings } from "@/twoopstracker/lib/settings";
import content from "content/pages/about.md";

function About({ partners, ...props }) {
  const { description, title } = props;

  return (
    <Page {...props}>
      <Hero description={description} title={title} withCTA={false} />
      <Content items={partners} />
    </Page>
  );
}

About.propTypes = {
  description: PropTypes.string,
  partners: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

About.defaultProps = {
  description: undefined,
  partners: undefined,
  title: undefined,
};

export async function getStaticProps() {
  const { attributes } = content;
  attributes.partners =
    attributes.partners
      ?.map(({ logo, name, url, ...others }) => ({
        title: name,
        image: logo,
        href: url,
        ...others,
      }))
      ?.map((partner) => md.renderObjectValuesInline(partner)) ?? null;
  const siteSettings = settings();

  return {
    props: {
      ...siteSettings,
      ...attributes,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default About;
