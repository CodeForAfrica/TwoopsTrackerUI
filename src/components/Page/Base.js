import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/twoopstracker/components/Footer";
import Navigation from "@/twoopstracker/components/Navigation";
import { navigationArgs } from "@/twoopstracker/config";

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, footer, ...props }) {
  return (
    <div>
      <Navigation {...navigationArgs} {...navigationArgs.userProfileArgs} />
      <NextSeo {...props} />
      {children}
      <Footer {...footer} />
    </div>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  footer: PropTypes.shape({}),
};

BasePage.defaultProps = {
  children: undefined,
  footer: undefined,
};

export default BasePage;
