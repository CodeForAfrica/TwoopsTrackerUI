import React from "react";

import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import { fetchLists } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <>
      <Page />
      <Lists {...props} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetchLists();

  // Pass data to the page via props
  return { props: { data } };
}
