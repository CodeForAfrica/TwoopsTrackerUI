import React from "react";

import Lists from ".";

export default {
  title: "Components/Lists",
  argTypes: {},
};

const Template = (args) => <Lists {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    { name: "List One", created_at: "Saved on yy/mm/dd at 00:00:00" },
    { name: "List Two", created_at: "Saved on yy/mm/dd at 00:00:00" },
    { name: "List Three", created_at: "Saved on yy/mm/dd at 00:00:00" },
    { name: "List Four", created_at: "Saved on yy/mm/dd at 00:00:00" },
  ],
};
