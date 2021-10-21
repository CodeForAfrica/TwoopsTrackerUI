import React from "react";

import TweetCard from ".";

export default {
  title: "Components/TweetCard",
  argTypes: {},
};

const Template = (args) => <TweetCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  retweet:
    "<span class='highlight'>Retweet @handle</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
  originalTweet:
    "Original tweet by  <span class='highlight'>Link to original tweet</span>",
};
