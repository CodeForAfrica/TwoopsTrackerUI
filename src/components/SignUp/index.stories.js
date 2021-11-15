import React from "react";

import SignUp from ".";

import { home } from "@/twoopstracker/config";

export default {
  title: "Components/SignUp",
  argTypes: {},
};

const Template = () => <SignUp {...home.signUp} />;

export const Default = Template.bind({});

Default.args = {};
