import React from "react";

import ListCard from ".";

export default {
  title: "Components/ListCard",
  argTypes: {},
};

function Template(args) {
  return <ListCard {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  name: "List One",
  created_at: "2021-11-16T15:37:07.752405Z",
  is_private: false,
  accounts: [{ screen_name: "code4africa" }],
};
