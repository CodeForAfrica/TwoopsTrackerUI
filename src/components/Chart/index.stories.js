import React from "react";

import Chart from ".";

import { tweets } from "@/twoopstracker/config";

export default {
  title: "Section/Chart",
  argTypes: {},
};

const Template = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = {
  tweets,
};
