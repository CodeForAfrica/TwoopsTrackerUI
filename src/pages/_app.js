import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "next-auth/client";
import { DefaultSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import theme from "@/twoopstracker/theme";
import "@/twoopstracker/theme/fonts.css";
import SEO from "next-seo.config";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider session={session}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    session: PropTypes.shape({}),
  }).isRequired,
};
