import React from "react";

import Component from ".";

export default {
  title: "Components/UserSearch",
  argTypes: {},
};

function Template(args) {
  return <Component {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "Forgot Password",
  description: "We will send you instructions to reset your password",
  emailLabel: "Email",
  submitLabel: "Submit",
};
