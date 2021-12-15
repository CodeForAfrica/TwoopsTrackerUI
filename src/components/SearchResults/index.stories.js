import React from "react";

import SearchResults from ".";

export default {
  title: "Components/SearchResults",
  argTypes: {},
};

const Template = (args) => <SearchResults {...args} />;

export const Default = Template.bind({});

Default.args = {
  results: "Kenya",
  label: "Search Results",
};
