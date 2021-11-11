import React from "react";

import Partners from ".";

import { home } from "@/twoopstracker/config";

export default {
  title: "Components/Partners",
  argTypes: {},
};

const Template = () => <Partners {...home.partners} />;

export const Default = Template.bind({});

Default.args = {};
