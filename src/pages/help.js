import PropTypes from "prop-types";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import { settings } from "@/twoopstracker/lib/cms";

function Help({ ...props }) {
  return <Page {...props} />;
}

Help.propTypes = {
  description: PropTypes.string,
  resouces: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

Help.defaultProps = {
  description: undefined,
  resouces: undefined,
  title: undefined,
};

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Help;
