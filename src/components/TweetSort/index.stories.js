/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import TweetSort from ".";

export default {
  title: "Components/TweetSort",
};

const Template = ({ ...args }) => <TweetSort {...args} />;

export const Default = Template.bind({});

Default.args = {
  countLabel: "Dataset",
  count: 65,
  orderLabel: "Order By",
  orderOptions: ["Relevance"],
  paginationOptions: [10, 25, 50],
  paginationLabel: "Show",
};
