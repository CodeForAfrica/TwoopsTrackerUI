import React from "react";

import Upload from ".";

import { upload } from "@/twoopstracker/config";

export default {
  title: "Components/Upload",
  argTypes: {},
};

const Template = (args) => <Upload {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...upload,
};