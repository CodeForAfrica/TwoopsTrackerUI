import { getSession } from "next-auth/react";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import UpdateProfile from "@/twoopstracker/components/UpdateProfile";
import { settings } from "@/twoopstracker/lib/cms";

function Update({ ...props }) {
  return (
    <Page {...props}>
      <UpdateProfile {...props} />
    </Page>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      ...settings(),
      session,
      title: "Update Profile",
    },
  };
}

export default Update;
