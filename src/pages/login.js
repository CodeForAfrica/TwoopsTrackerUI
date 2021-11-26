import { getProviders } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import Login from "@/twoopstracker/components/LoginForm";
import Page from "@/twoopstracker/components/Page";

function SignIn({ providers: providersProp, ...props }) {
  return (
    <Page {...props}>
      <Login providers={providersProp} />
    </Page>
  );
}

SignIn.propTypes = {
  providers: PropTypes.shape({}),
};

SignIn.defaultProps = {
  providers: undefined,
};

export async function getStaticProps(context) {
  const providers = await getProviders(context);

  return {
    props: {
      providers,
      title: "Sign in",
    },
    revalidate: 60 * 60, // 60 minutes
  };
}

export default SignIn;
