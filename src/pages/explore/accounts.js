import { getSession } from "next-auth/react";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { paginationOptions } from "@/twoopstracker/config";
import { tweeterAccounts } from "@/twoopstracker/lib";
import { accountList, settings, accountLabel } from "@/twoopstracker/lib/cms";

export default function Index(props) {
  return (
    <Page {...props}>
      <AccountsList {...props} paginationProps={paginationOptions} {...props} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { query: userQuery } = context;
  const query = { page: 1, pageSize: 20, ...userQuery };
  const data = await tweeterAccounts(session, query);

  return {
    props: {
      apiUrl: `/api/accounts`,
      ...settings(),
      ...accountList(),
      ...accountLabel(),
      data,
      session,
    },
  };
}
