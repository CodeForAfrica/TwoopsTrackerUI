import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/twoopstracker/components/Footer";
import Navigation from "@/twoopstracker/components/Navigation";
import { navigationArgs, footerArgs } from "@/twoopstracker/config";

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, ...props }) {
  return (
    <div>
      <Navigation {...navigationArgs} {...navigationArgs.userProfileArgs} />
      <NextSeo {...props} />
      {children}
      <Footer {...footerArgs} />
    </div>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BasePage.defaultProps = {
  children: undefined,
};

export default BasePage;
