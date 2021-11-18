import React from "react";

import Navigation from ".";

import { navigationArgs, userProfileArgs } from "@/twoopstracker/config";

export default {
  title: "Sections/Navigation",
  argTypes: {},
};

const Template = ({ ...args }) => <Navigation {...args} />;
export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/sections-navigation--default",
  },
};

Default.args = {
  ...navigationArgs,
  ...userProfileArgs,
};
