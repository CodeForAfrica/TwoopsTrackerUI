import { Typography } from "@material-ui/core";
import React from "react";

import Page from "@/twoopstracker/components/Page";
import Tweets from "@/twoopstracker/components/Tweets";
import config from "@/twoopstracker/config";

const { tweets } = config;

export default function Index() {
  return (
    <>
      <Typography>One Two Three</Typography>
      <Tweets tweets={tweets} />
      <Page />
    </>
  );
}
