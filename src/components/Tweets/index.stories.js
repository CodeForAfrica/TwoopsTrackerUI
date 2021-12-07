import React from "react";

import Tweets from ".";

import { tweets } from "@/twoopstracker/config";

export default {
  title: "Components/Tweets",
  argTypes: {},
};

const Template = (args) => <Tweets {...args} />;

export const Default = Template.bind({});

Default.args = {
  tweets,
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
