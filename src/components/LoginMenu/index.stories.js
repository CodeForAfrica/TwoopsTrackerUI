import React from "react";

import LoginMenu from ".";

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

function Template({ ...args }) {
  return <LoginMenu {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  items: [
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
};
