import { useSession } from "next-auth/client";
import Router from "next/router";
import React, { useEffect } from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { fetchList } from "@/twoopstracker/lib";

export default function Index(props) {
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      Router.push("/login");
    }
  }, [session, loading]);
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
