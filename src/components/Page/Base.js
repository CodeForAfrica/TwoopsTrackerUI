import { GoogleFonts } from "next-google-fonts";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, ...props }) {
  return (
    <div>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;700&family=Open+Sans:wght@400;700&display=swap" />
      <NextSeo {...props} />
      {children}
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
