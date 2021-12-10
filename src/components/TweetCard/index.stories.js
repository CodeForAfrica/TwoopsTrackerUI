import React from "react";

import TweetCard from ".";

export default {
  title: "Components/TweetCard",
  argTypes: {},
};

function Template(args) {
  return <TweetCard {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  owner: {
    screen_name: "Dave Chapelle",
    protected: true,
    name: "One Two",
  },
  likes_count: 10,
  retweets_count: 10,
  replies_count: 10,
  created_at: "2021-10-25T14:02:53.844432Z",
  deleted: true,
  content:
    "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
};
