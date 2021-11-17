import React from "react";

import Card from ".";

import cardImage from "@/twoopstracker/assets/images/image18.png";

export default {
  title: "Components/Card",
};

const Template = (args) => {
  return <Card {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  title: "Our new website is out and it comes with new advanced features.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
  href: "/?path=/story/components-featured-story-card--default",
  ctaText: "Read More",
  image: cardImage,
  variant: "news",
};
