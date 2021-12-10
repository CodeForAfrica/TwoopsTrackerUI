import React from "react";

import SignUp from ".";

const signUp = {
  buttonLink: "/signup",
  buttonText: "Sign up",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
  image: "/images/trolltracker-showcase-1.png",
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
