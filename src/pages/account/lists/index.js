import { getSession } from "next-auth/client";
import React from "react";

import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import { lists } from "@/twoopstracker/lib";

export default function Index(props) {
  return (
    <Page {...props}>
      <Lists {...props} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const results = await lists(session);

  if (!(session && session?.user)) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  // Pass data to the page via props
  return { props: { results, session } };
}
