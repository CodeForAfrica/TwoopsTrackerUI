import React from "react";

import UserSearchCard from ".";

export default {
  title: "Components/UserSearchCard",
  argTypes: {},
};

const Template = (args) => <UserSearchCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "Search name",
  created_at: "2021-10-25T14:02:53.844432Z",
  query: {
    term: "Crime",
    location: "Russia",
  },
};
