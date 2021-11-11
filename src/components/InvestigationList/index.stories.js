import React from "react";

import InvestigationList from ".";

import { investigation } from "@/twoopstracker/config";

export default {
  title: "Components/InvestigationList",
};

const Template = (args) => <InvestigationList {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-investigation-list--default",
  },
};

Default.args = {
  items: investigation.items,
};
