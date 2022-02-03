import { useRouter } from "next/router";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import ResetPassword from "@/twoopstracker/components/ResetPassword";
import { settings, resetPassword } from "@/twoopstracker/lib/cms";

function Index({ ...props }) {
  const {
    query: { uid, token },
  } = useRouter();
  return (
    <Page {...props}>
      <ResetPassword {...props} uid={uid} token={token} />
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
      ...resetPassword(),
    },
  };
}

export default Index;
