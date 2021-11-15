import { providers } from "next-auth/client";
import React from "react";

import Login from "@/twoopstracker/components/LoginForm";

function Home(props) {
  return (
    <>
      <Login {...props} />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      providers: await providers(context),
    },
    revalidate: 60 * 60, // 60 minutes
  };
}

export default Home;
