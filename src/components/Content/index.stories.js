import React from "react";

import Content from ".";

import { investigation } from "@/twoopstracker/config";

export default {
  title: "Components/Content",
};

const Template = (args) => <Content {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-investigation-list--default",
  },
};

Default.args = {
  items: investigation.items,
};
