import React from "react";

import List from ".";

export default {
  title: "Components/List",
  argTypes: {},
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});

Default.args = {
  listName: "List One",
  createdAt: "Created on mm/yy/dd at 00:00:00",
};
