import React from "react";

import AddToList from ".";

export default {
  title: "Components/AddToList",
  argTypes: {},
};

const Template = (args) => <AddToList {...args} />;

export const Default = Template.bind({});

Default.args = {
  results: [
    {
      name: "List One",
      created_at: "2021-11-16T15:37:07.752405Z",
      accounts: [{ screen_name: "code4africa" }],
    },
    {
      name: "List Two",
      created_at: "2021-11-16T15:37:07.752405Z",
      accounts: [{ screen_name: "code4africa" }],
    },
    {
      name: "List Three",
      created_at: "2021-11-16T15:37:07.752405Z",
      accounts: [{ screen_name: "code4africa" }],
    },
    {
      name: "List Four",
      created_at: "2021-11-16T15:37:07.752405Z",
      accounts: [{ screen_name: "code4africa" }],
    },
  ],
};
