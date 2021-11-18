import React from "react";

import LoginMenu from ".";

import { navigationArgs } from "@/twoopstracker/config";

export default {
  title: "Components/LoginMenu",
  argTypes: {
    links: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <LoginMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: navigationArgs.loginMenuProps,
};
