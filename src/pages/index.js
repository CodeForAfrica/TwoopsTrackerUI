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
  const url = process.env.TWOOPSTRACKER_API_URL;
  // Fetch data from external API
  const res = await fetch(`${url}/tweets/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
