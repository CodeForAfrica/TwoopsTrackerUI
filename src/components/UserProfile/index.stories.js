import { Grid } from "@material-ui/core";
import React from "react";

import UserProfile from ".";

import { navigationArgs } from "@/twoopstracker/config";

export default {
  title: "Components/UserProfile",
  argTypes: {},
};

function Template({ ...args }) {
  return (
    <Grid container="row" justifyContent="flex-end" alignItems="center">
      <UserProfile {...args} />
    </Grid>
  );
}
export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-userprofile--defaultt",
  },
};

Default.args = {
  ...navigationArgs.userProfileArgs,
};
