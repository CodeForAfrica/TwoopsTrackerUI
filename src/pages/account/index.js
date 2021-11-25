import React from "react";

import Page from "@/twoopstracker/components/Page";
import UserProfile from "@/twoopstracker/components/UserProfile";

export default function Resources({ ...props }) {
  return (
    <Page {...props}>
      <UserProfile />
    </Page>
  );
}
