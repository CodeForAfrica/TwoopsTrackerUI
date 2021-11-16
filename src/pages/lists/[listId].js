import React from "react";

// import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import { fetchList } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <Page {...props}>
      <div>Data List</div>
    </Page>
  );
}

export async function getServerSideProps(params) {
  const { params: paramData } = params;
  const data = await fetchList(paramData.listId);

  // Pass data to the page via props
  return { props: { data } };
}
