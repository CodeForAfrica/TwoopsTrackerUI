import { getProviders, getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import SignUp from "@/twoopstracker/components/SignUp";
import { settings, signUp } from "@/twoopstracker/lib/cms";

function SignIn({ providers: providersProp, ...props }) {
  return (
    <Page {...props}>
      <SignUp providers={providersProp} {...props} />
    </Page>
  );
}

SignIn.propTypes = {
  providers: PropTypes.shape({}),
};

SignIn.defaultProps = {
  providers: undefined,
};

/**
 *  NOTE(kilemensi): [getProviders()](https://next-auth.js.org/v3/getting-started/client#getproviders)
 *                   calls /api/providers, which is not available during build
 *                   time and hence we can't use it here.
 */
export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      ...settings(),
      ...signUp(),
      providers,
      session,
    },
  };
}

export default SignIn;
