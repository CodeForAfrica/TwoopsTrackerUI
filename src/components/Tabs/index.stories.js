import React from "react";

import Tabs from ".";

const items = [
  { label: "Lists", children: <div>Lists Panel</div> },
  { label: "Saved Searches", children: <div>Saved Search Panel</div> },
];

export default {
  title: "Components/Tabs",
};

function Template({ ...args }) {
  return <Tabs {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  items,
};
