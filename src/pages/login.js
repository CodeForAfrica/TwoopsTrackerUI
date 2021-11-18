import { getProviders } from "next-auth/client";
import PropTypes from "prop-types";
import React from "react";

import Login from "@/twoopstracker/components/LoginForm";

function Home({ providers }) {
  return <Login providers={providers} />;
}

Home.propTypes = {
  providers: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  providers: undefined,
};

export async function getStaticProps(context) {
  return {
    props: {
      providers: await getProviders(context),
    },
    revalidate: 60 * 60, // 60 minutes
  };
}

export default Home;
