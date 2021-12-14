import React from "react";

import ExploreTool from ".";

const props = {
  buttonLink: "/explore",
  buttonText: "Explore the tool",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
  image: "/images/Group 40.png",
  title: "Get more data today!",
};

export default {
  title: "Components/ExploreTool",
  argTypes: {},
};

const Template = (args) => <ExploreTool {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...props,
};
