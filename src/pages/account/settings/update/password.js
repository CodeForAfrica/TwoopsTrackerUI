import { getSession } from "next-auth/react";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import UpdatePassword from "@/twoopstracker/components/UpdatePassword";
import { settings, updatePassword } from "@/twoopstracker/lib/cms";

function Update({ ...props }) {
  return (
    <Page {...props}>
      <UpdatePassword {...props} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!(session && session?.user)) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: {
      ...settings(),
      ...updatePassword(),
      session,
    },
  };
}

export default Update;
