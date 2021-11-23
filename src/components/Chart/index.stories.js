import React from "react";

import Chart from ".";

import { tweetsCount } from "@/twoopstracker/config";

export default {
  title: "Sections/Chart",
  argTypes: {},
};

const Template = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: tweetsCount,
};
