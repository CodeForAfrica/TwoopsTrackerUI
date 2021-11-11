import React from "react";

import Hero from ".";

import { home } from "@/twoopstracker/config";

export default {
  title: "Components/Hero",
  argTypes: {},
};

const Template = () => <Hero {...home.hero} />;

export const Default = Template.bind({});

Default.args = {};
