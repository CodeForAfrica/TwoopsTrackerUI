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
    { name: "List One", createdAt: "Saved on yy/mm/dd at 00:00:00" },
    { name: "List Two", createdAt: "Saved on yy/mm/dd at 00:00:00" },
    { name: "List Three", createdAt: "Saved on yy/mm/dd at 00:00:00" },
    { name: "List Four", createdAt: "Saved on yy/mm/dd at 00:00:00" },
  ],
};
