import React from "react";

import Chart from ".";

const tweetsCount = [
  {
    date: "2021-10-08",
    count: 2430,
  },
  {
    date: "2021-10-09",
    count: 3400,
  },
  {
    date: "2021-10-10",
    count: 5670,
  },
  {
    date: "2021-10-11",
    count: 800,
  },
  {
    date: "2021-10-12",
    count: 1230,
  },
  {
    date: "2021-10-13",
    count: 3420,
  },
  {
    date: "2021-10-14",
    count: 0,
  },
];

export default {
  title: "Sections/Chart",
  argTypes: {},
};

function Template(args) {
  return <Chart {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  data: tweetsCount,
};
