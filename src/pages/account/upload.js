import React from "react";

import Page from "@/twoopstracker/components/Page";
import Upload from "@/twoopstracker/components/Upload";
import { upload } from "@/twoopstracker/config";

export default function About({ ...props }) {
  return (
    <Page {...props}>
      <Upload {...upload} />
    </Page>
  );
}
