import React from "react";

import SignUp from ".";

import monitorImage from "@/twoopstracker/assets/images/Group 40.svg";

const signUp = {
  buttonLink: "/signup",
  buttonText: "Sign up",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
  image: monitorImage,
  title: "Get more data today!",
};

export default {
  title: "Components/SignUp",
  argTypes: {},
};

const Template = (args) => <SignUp {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...signUp,
};
