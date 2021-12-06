import PropTypes from "prop-types";
import React from "react";

import Content from "@/twoopstracker/components/Content";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { about, settings } from "@/twoopstracker/lib/cms";

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
  return {
    props: {
      ...settings(),
      ...about(),
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default About;
