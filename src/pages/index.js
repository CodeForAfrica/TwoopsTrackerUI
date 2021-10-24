import { Typography } from "@material-ui/core";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import Tweets from "@/twoopstracker/components/Tweets";

export default function Index() {
  return (
    <>
      <Typography>One Two Three</Typography>
      <Tweets />
      <Page />
    </>
  );
}
