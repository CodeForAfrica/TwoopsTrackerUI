import { getSession } from "next-auth/client";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
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

  const data = await allUsernames(session, query);

  // Pass data to the page via props
  return { props: { data, session } };
}
