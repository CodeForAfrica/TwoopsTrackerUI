import PropTypes from "prop-types";
import React from "react";

import Content from "@/twoopstracker/components/Content";
import Hero from "@/twoopstracker/components/Hero";
import Page from "@/twoopstracker/components/Page";
import * as md from "@/twoopstracker/lib/md";
import { settings } from "@/twoopstracker/lib/settings";
import content from "content/pages/lexicons.md";

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
  const { attributes } = content;
  attributes.resouces =
    attributes.resouces
      ?.map(({ thumbnail, name, url, ...others }) => ({
        title: name,
        image: thumbnail,
        href: url,
        ...others,
      }))
      ?.map((resource) => md.renderObjectValuesInline(resource)) ?? null;
  const siteSettings = settings();

  return {
    props: {
      ...siteSettings,
      ...attributes,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Lexicons;
