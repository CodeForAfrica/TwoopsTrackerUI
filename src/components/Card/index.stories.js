import React from "react";

import Card from ".";

import { investigation } from "@/twoopstracker/config";

export default {
  title: "Components/Card",
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  items: investigation.items,
};
