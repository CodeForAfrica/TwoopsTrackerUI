import makeStyles from "@mui/styles/makeStyles";
import React from "react";

import Figure from ".";

const useStyles = makeStyles(() => ({
  root: {
    height: 133.5,
    width: 133.5,
  },
}));

export default {
  title: "Components/Figure",
};

function Template(args) {
  const classes = useStyles(args);

  return <Figure {...args} className={classes.root} />;
}

export const Default = Template.bind({});

Default.args = {
  src: "https://pbs.twimg.com/profile_images/705999407066562560/BdApG2iK_400x400.jpg",
};
