import React from "react";

import Page from "@/twoopstracker/components/Page";
import UserAccount from "@/twoopstracker/components/UserAccount";

export default function Resources({ ...props }) {
  return (
    <Page {...props}>
      <UserAccount />
    </Page>
  );
}
