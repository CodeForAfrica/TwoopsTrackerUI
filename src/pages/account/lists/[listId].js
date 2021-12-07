import { getSession } from "next-auth/client";
import React from "react";

import AccountsList from "@/twoopstracker/components/AccountsList";
import Page from "@/twoopstracker/components/Page";
import { list } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <Page {...props}>
      <AccountsList {...props} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const { params: paramData } = context;
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const data = await list(paramData.listId, session);

  // Pass data to the page via props
  return {
    props: {
      data,
      session,
      apiUrl: `/api/lists/${paramData.listId}`,
      editable: true,
    },
  };
}
