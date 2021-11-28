import React from "react";

import LoginMenu from ".";

import { navigationArgs } from "@/twoopstracker/config";

export default {
  title: "Components/LoginMenu",
  argTypes: {
    loginMenu: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <LoginMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  loginMenu: navigationArgs.loginMenuProps,
};
