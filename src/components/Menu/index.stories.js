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
    logOutLabel: {
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
    accountLinks: {
      control: {
        label: "array",
      },
    },
  },
};

function Template({ ...args }) {
  return <Menu {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  login: [
    {
      label: "Sign up",
      href: "/login",
      icon: {
        src: "/images/signup.svg",
      },
    },
    {
      label: "Login",
      href: "/login",
      icon: {
        src: "/images/login.svg",
      },
    },
  ],
  main: [
    {
      label: "Watchlists",
      href: "/explore",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  label: navigationArgs.userProfileArgs.label,
  logOutLabel: navigationArgs.userProfileArgs.logOutLabel,
  avatorProps: navigationArgs.userProfileArgs.avatorProps,
  profilePages: navigationArgs.userProfileArgs.profilePages,
  accountLinks: navigationArgs.userProfileArgs.accountLinks,
};
