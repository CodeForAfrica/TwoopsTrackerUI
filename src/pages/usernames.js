import { getSession } from "next-auth/client";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { accounts } from "@/twoopstracker/config";
import { allUsernames } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <Page {...props}>
      <AccountsList {...props} />
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

  let data = await allUsernames(session, query);
  if (!data) {
    data = accounts;
    data.accounts = data.results;
    delete data.results;
  }
  // Pass data to the page via props
  return { props: { data, session } };
}
