import { useSession } from "next-auth/client";
import Router from "next/router";
import React, { useEffect } from "react";

import Lists from "@/twoopstracker/components/Lists";
import Page from "@/twoopstracker/components/Page";
import { lists } from "@/twoopstracker/lib";

export default function Index(props) {
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      Router.push("/login");
    }
  }, [session, loading]);

  return (
    <Page {...props}>
      <Lists {...props} />
    </Page>
  );
}

export async function getServerSideProps() {
  const { results } = await lists();

  // Pass data to the page via props
  return { props: { results } };
}
