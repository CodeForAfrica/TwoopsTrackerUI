import React from "react";

import Navigation from ".";

import { navigationArgs } from "@/twoopstracker/config";

export default {
  title: "Sections/Navigation",
  argTypes: {},
};

function Template({ ...args }) {
  return <Navigation {...args} />;
}
export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/sections-navigation--default",
  },
};

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
  logo: {
    desktop: {
      src: "/images/navlogo.svg",
    },
    mobile: {
      src: "/images/navlogo.svg",
    },
  },
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
  ...navigationArgs.userProfileArgs,
  ...navigationArgs.userProfileArgs.profileList,
  ...navigationArgs.userProfileArgs.accountLink,
};
