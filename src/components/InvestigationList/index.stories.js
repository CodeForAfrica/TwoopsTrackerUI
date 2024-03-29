import React from "react";

import { Default as HeroDefault } from "../Hero/index.stories";

import InvestigationList from ".";

export default {
  title: "Sections/InvestigationList",
};

function Template(args) {
  return <InvestigationList {...args} />;
}

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-investigation-list--default",
  },
};

Default.args = {
  items: HeroDefault.args.items,
};
