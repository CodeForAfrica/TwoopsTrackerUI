import React from "react";

import InvestigationsCard from ".";

export default {
  title: "Components/InvestigationsCard",
  argTypes: {
    ctaText: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <InvestigationsCard {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/components-featured-story-card--default",
  },
};

Default.args = {
  title: "Our new website is out and it comes with new advanced features.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
  href: "/?path=/story/components-featured-story-card--default",
  ctaText: "Read More",
  image: "/images/image-4-s.jpg",
  variant: "news",
};
