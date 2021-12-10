import React from "react";

import Upload from ".";

import { upload } from "@/twoopstracker/config";

export default {
  title: "Sections/Upload",
  argTypes: {},
};

function Template(args) {
  return <Upload {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  ...upload,
};
