import React from "react";

import Page from "@/twoopstracker/components/Page";
import TweetsContainer from "@/twoopstracker/components/TweetsContainer";
import { fetchTweets } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <>
      <TweetsContainer {...props} />
      <Page />
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetchTweets();

  // Pass data to the page via props
  return { props: { data } };
}
