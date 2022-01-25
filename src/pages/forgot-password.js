import React from "react";

import ForgotPassword from "@/twoopstracker/components/ForgotPassword";
import Page from "@/twoopstracker/components/Page";
import { settings, fgPassword } from "@/twoopstracker/lib/cms";

function Index({ ...props }) {
  return (
    <Page {...props}>
      <ForgotPassword {...props} />
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
      ...fgPassword(),
    },
  };
}

export default Index;
