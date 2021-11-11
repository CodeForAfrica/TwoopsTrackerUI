import React from "react";

import InvestigationsPreview from ".";

import { home } from "@/twoopstracker/config";

export default {
  title: "Components/InvestigationsPreview",
  argTypes: {},
};

const Template = () => <InvestigationsPreview {...home.investigation} />;

export const Default = Template.bind({});

Default.args = {};
