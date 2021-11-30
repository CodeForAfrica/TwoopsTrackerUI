import React from "react";

import Menu from ".";

import { navigationArgs } from "@/twoopstracker/config";

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
    label: {
      control: {
        label: "text",
      },
    },
    avatorProps: {
      control: {
        label: "array",
      },
    },
    profileList: {
      control: {
        label: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: navigationArgs.menuProps,
  loginMenuProps: navigationArgs.loginMenuProps,
  label: navigationArgs.userProfileArgs.label,
  avatorProps: navigationArgs.userProfileArgs.avatorProps,
  profileList: navigationArgs.userProfileArgs.profileList,
};
