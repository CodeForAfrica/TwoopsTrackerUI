import React from "react";

import UpdatePassword from ".";

export default {
  title: "Components/UpdatePassword",
  argTypes: {},
};

function Template(args) {
  return <UpdatePassword {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "Change Password",
  oldPasswordLabel: "Old Password",
  newPasswordLabel: "New Password",
  successLabel: "Password Successfully Updated!!",
  errorLabel: "An Error Happened, Try again",
  buttonLabel: "Change Password",
  passwordIcon: "/images/password.svg",
};
