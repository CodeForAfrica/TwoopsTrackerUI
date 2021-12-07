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

  let data = await allUsernames(session, query);
  if (!data) {
    data = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "Valtteri Bottas",
          account_id: 1143472657,
          screen_name: "ValtteriBottas",
          protected: false,
          created_at: "2021-12-07T10:11:25.314577Z",
          updated_at: "2021-12-07T10:11:25.314616Z",
        },
      ],
    };
  }
  data.accounts = data.results;

  // Pass data to the page via props
  return { props: { data, session } };
}
