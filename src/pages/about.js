import PropTypes from "prop-types";
import React from "react";

import AboutContent from "@/twoopstracker/components/AboutContent";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { about } from "@/twoopstracker/config";
import * as md from "@/twoopstracker/lib/md";
import aboutContent from "content/about.md";

function About({ items, ...props }) {
  const { description, title } = props;

  return (
    <Page description={description} title={title} {...props}>
      <Hero description={description} title={title} withCTA={false} />
      <AboutContent items={items} />
    </Page>
  );
}

About.propTypes = {
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

About.defaultProps = {
  description: undefined,
  items: undefined,
  title: undefined,
};

export async function getStaticProps() {
  const attributes = md.renderObjectValuesInline(aboutContent.attributes);

  return {
    props: {
      ...about,
      ...attributes,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default About;
