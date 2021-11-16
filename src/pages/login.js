import React from "react";

import Login from "@/twoopstracker/components/LoginForm";

function Home(props) {
  return (
    <>
      <Login {...props} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60 * 60, // 60 minutes
  };
}

export default Home;
