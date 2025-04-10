import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "@mui/styles";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";

import "@/twoopstracker/theme/fonts.css";
import theme from "@/twoopstracker/theme";
import SEO from "next-seo.config";

export default function MyApp(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    /* eslint-env browser */
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </StyledThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    session: PropTypes.shape({}),
  }).isRequired,
};
