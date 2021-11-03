import React from "react";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";

export default function Index(props) {
  return (
    <>
      <TweetsContainer {...props} />
      <Page />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dev.investigate.africa/v1/tweets/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
