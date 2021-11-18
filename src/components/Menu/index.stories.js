import React from "react";

import Menu from ".";

import { navigationArgs, userProfileArgs } from "@/twoopstracker/config";

export default {
  title: "Components/Menu",
  argTypes: {
    links: {
      control: {
        type: "array",
      },
    },
    loginMenuProps: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: navigationArgs.menuProps,
  loginMenuProps: navigationArgs.loginMenuProps,
  ...userProfileArgs,
};
