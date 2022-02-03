import { getSession } from "next-auth/react";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import UpdateProfile from "@/twoopstracker/components/UpdateProfile";
import { settings, updateProfile } from "@/twoopstracker/lib/cms";

function Update({ ...props }) {
  return (
    <Page {...props}>
      <UpdateProfile {...props} />
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
      ...updateProfile(),
      session,
    },
  };
}

export default Update;
