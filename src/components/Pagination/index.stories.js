import React from "react";

import Pagination from ".";

import { pagination, tweets } from "@/twoopstracker/config";

export default {
  title: "Section/Pagination",
  argTypes: {},
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...pagination,
  page: 1,
  pageSize: "20",
  count: tweets.length / 20,
};
