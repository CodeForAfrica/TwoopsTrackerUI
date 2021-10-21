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
  username: "Dave Chappelle",
  handle: "<span class='highlight'>@handle</span> Type of account",
  listDescription: "Add to List",
  posted: "Posted on mm/dd/yyyy at 00:00:00",
  deleted:
    "Deleted after xx minutes <span class='highlight'>about x hours ago</span>",
  interactions: "Number of interactions: xxxx",
};
