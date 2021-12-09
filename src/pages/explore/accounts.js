import { getSession } from "next-auth/client";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { pagination } from "@/twoopstracker/config";
import { allAccounts } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <Page {...props}>
      <AccountsList {...props} paginationProps={pagination} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { query } = context;

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const data = await allAccounts(session, query);
  data.accounts = data?.results;
  delete data.results;
  // Pass data to the page via props
  return { props: { data, session } };
}
