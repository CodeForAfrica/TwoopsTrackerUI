import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Page from "@/twoopstracker/components/Page";
import { chartData } from "@/twoopstracker/config";

export default function Index() {
  return (
    <Page>
      <Chart data={chartData} />
    </Page>
  );
}
