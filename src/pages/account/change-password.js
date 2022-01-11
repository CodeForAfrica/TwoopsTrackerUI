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

  return {
    props: {
      ...settings(),
      ...updatePassword(),
      session,
      title: "Update Profile",
    },
  };
}

export default Update;
