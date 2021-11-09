import React from "react";

import Banner from "@/twoopstracker/components/Banner";
import CallToAction from "@/twoopstracker/components/CallToAction";
import Investigations from "@/twoopstracker/components/Investigations";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";

export default function Index() {
  return (
    <Page>
      <Banner />
      <CallToAction />
      <Investigations />
      <Partners />
    </Page>
  );
}
