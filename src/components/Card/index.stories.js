import React from "react";

import Card from ".";

export default {
  title: "Components/Card",
};

function Template(args) {
  return <Card {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  title: "Our new website is out and it comes with new advanced features.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
  href: "/?path=/story/components-featured-story-card--default",
  ctaText: "Read More",
  image: "/images/image-4-s.jpg",
  variant: "news",
};
