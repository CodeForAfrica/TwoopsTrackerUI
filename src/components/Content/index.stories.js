import React from "react";

import Content from ".";

import { about } from "@/twoopstracker/config";

export default {
  title: "Section/Content",
};

const Template = (args) => <Content {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-investigation-list--default",
  },
};

Default.args = {
  items: about.items,
};
