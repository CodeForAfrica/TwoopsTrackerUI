import PropTypes from "prop-types";
import React from "react";

import Content from "@/twoopstracker/components/Content";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { about } from "@/twoopstracker/config";

function About({ about: aboutProp, ...props }) {
  return (
    <Page {...props}>
      <Hero withCTA={false} {...aboutProp.banner} />
      <Content items={aboutProp.items} />
    </Page>
  );
}

About.propTypes = {
  about: PropTypes.shape({}),
};

About.defaultProps = {
  about: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      about,
      description: about?.banner?.description ?? null,
      title: "About",
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default About;
