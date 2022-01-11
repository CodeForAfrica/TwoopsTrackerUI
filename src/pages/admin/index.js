import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import PropTypes from "prop-types";
import React from "react";

import content from "content/pages/admin.md";

function AdminPage(props) {
  return (
    <>
      <Head>
        {/* Note the "type" and "rel" attribute values, which are required. */}
        <link
          href="/api/admin/config.yml"
          type="text/yaml"
          // eslint-disable-next-line react/no-invalid-html-attribute
          rel="cms-config-url"
        />
      </Head>
      <NextSeo {...props} />
      <Script
        src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"
        strategy="beforeInteractive"
      />
    </>
  );
}

AdminPage.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

AdminPage.defaultProps = {
  description: undefined,
  title: undefined,
};

export async function getStaticProps() {
  const { attributes } = content;

  return {
    props: {
      ...attributes,
    },
  };
}

export default AdminPage;
