import React from "react";

import Partners from ".";

const partners = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  items: [
    { image: "/images/artboard-1-2x-1.png", href: "#" },
    { image: "/images/cfa-editable-logo-01-1.png", href: "#" },
  ],
  title: "Partners & About Us",
};

export default {
  title: "Components/Partners",
  argTypes: {},
};

const Template = (args) => <Partners {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...partners,
};
