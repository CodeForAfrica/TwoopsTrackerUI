import PropTypes from "prop-types";
import React from "react";

import Content from "@/twoopstracker/components/Content";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import { lexicons, settings } from "@/twoopstracker/lib/cms";

function Lexicons({ resouces, ...props }) {
  const { description, title } = props;

  return (
    <Page {...props}>
      <Hero description={description} title={title} withCTA={false} />
      <Content items={resouces} size="large" />
    </Page>
  );
}

Lexicons.propTypes = {
  description: PropTypes.string,
  resouces: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

Lexicons.defaultProps = {
  description: undefined,
  resouces: undefined,
  title: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
      ...lexicons(),
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Lexicons;
