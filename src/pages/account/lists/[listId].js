import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { fetchList } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <Page {...props}>
      <AccountsList {...props} />
    </Page>
  );
}

export async function getServerSideProps(params) {
  const { params: paramData } = params;
  const data = await fetchList(paramData.listId);

  // Pass data to the page via props
  return { props: { data } };
}
