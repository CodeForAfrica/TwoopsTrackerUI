import React from "react";

import UserProfile from ".";

import { navigationArgs } from "@/twoopstracker/config";

export default {
  title: "Components/UserProfile",
  argTypes: {},
};

const Template = ({ ...args }) => <UserProfile {...args} />;
export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-userprofile--defaultt",
  },
};

Default.args = {
  ...navigationArgs.userProfileArgs,
};
