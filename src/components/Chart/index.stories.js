import React from "react";

import Chart from ".";

const tweetsCount = [
  {
    date: "2021-10-08",
    count: 243,
  },
  {
    date: "2021-10-09",
    count: 340,
  },
  {
    date: "2021-10-10",
    count: 567,
  },
  {
    date: "2021-10-11",
    count: 80,
  },
  {
    date: "2021-10-12",
    count: 123,
  },
  {
    date: "2021-10-13",
    count: 342,
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
