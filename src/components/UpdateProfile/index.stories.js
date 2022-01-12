import React from "react";

import UserSearch from ".";

export default {
  title: "Components/UserSearch",
  argTypes: {},
};

function Template(args) {
  return <UserSearch {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "Edit your details",
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  changePasswordLabel: "Change your password",
  changePasswordLink: "/change-password",
  updateLabel: "Update",
};
