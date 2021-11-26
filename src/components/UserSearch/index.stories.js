import React from "react";

import UserSearch from ".";

export default {
  title: "Components/UserSearch",
  argTypes: {},
};

const Template = (args) => <UserSearch {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      name: "Search name",
      created_at: "2021-10-25T14:02:53.844432Z",
      query: {
        term: "Crime",
        location: "Russia",
      },
    },
    {
      name: "Search name",
      created_at: "2021-10-25T14:02:53.844432Z",
      query: {
        term: "Crime",
        location: "Russia",
      },
    },
    {
      name: "Search name",
      created_at: "2021-10-25T14:02:53.844432Z",
      query: {
        term: "Crime",
        location: "Russia",
      },
    },
  ],
};
