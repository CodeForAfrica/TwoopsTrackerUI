import { Typography } from "@material-ui/core";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import Section from "@/twoopstracker/components/Section";
import { settings } from "@/twoopstracker/lib/cms";

function VerifyEmail({ ...props }) {
  return (
    <Page {...props}>
      <Section>
        <Typography variant="body1" />
      </Section>
    </Page>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...settings(),
    },
  };
}

export default VerifyEmail;
