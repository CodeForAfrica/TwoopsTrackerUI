import Script from "next/script";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import Footer from "@/twoopstracker/components/Footer";
import Navigation from "@/twoopstracker/components/Navigation";
import { navigationArgs } from "@/twoopstracker/config";

/**
 * Base page that can be used to build all other pages.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

function BasePage({ children, footer, navigation, ...props }) {
  return (
    <div>
      {GTM_ID ? (
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');        
          `,
          }}
        />
      ) : (
        ""
      )}
      <Navigation {...navigation} {...navigationArgs.userProfileArgs} />
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
  navigation: PropTypes.shape({}),
};

BasePage.defaultProps = {
  children: undefined,
  footer: undefined,
  navigation: undefined,
};

export default BasePage;
