import React from "react";

import AboutContent from ".";

import { investigation } from "@/twoopstracker/config";

export default {
  title: "Components/AboutContent",
};

const Template = (args) => <AboutContent {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-investigation-list--default",
  },
};

Default.args = {
  items: investigation.items,
};
