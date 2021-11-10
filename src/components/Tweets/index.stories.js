import React from "react";

import Tweets from ".";

import config from "@/twoopstracker/config";

export default {
  title: "Components/Tweets",
  argTypes: {},
};

const Template = (args) => <Tweets {...args} />;

export const Default = Template.bind({});

Default.args = {
  tweets: config.tweets,
};
