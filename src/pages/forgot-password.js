import React from "react";

import ForgotPassword from "@/twoopstracker/components/ForgotPassword";
import Page from "@/twoopstracker/components/Page";
import { settings, forgotPassword } from "@/twoopstracker/lib/cms";

function Index({ ...props }) {
  return (
    <Page {...props}>
      <ForgotPassword label="Submit" {...props} />
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
      ...forgotPassword(),
    },
  };
}

export default Index;
