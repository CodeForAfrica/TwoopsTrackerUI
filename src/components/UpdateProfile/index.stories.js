import React from "react";

import UpdateProfile from ".";

export default {
  title: "Components/UpdateProfile",
  argTypes: {},
};

function Template(args) {
  return <UpdateProfile {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "Edit your details",
  firstNameLabel: "First Name",
  lastNameLabel: "Last Name",
  successLabel: "Account Successfully Updated!!",
  errorLabel: "An Error Happened, Try again",
  changePasswordLabel: "Change your password",
  changePasswordLink: "/account/settings/update/password",
  buttonLabel: "Update",
  email: "Email",
};
