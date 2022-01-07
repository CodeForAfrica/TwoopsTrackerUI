import React from "react";

import InvestigationsPreview from ".";

const investigations = {
  buttonLink: "/investigations",
  buttonText: "Read all reports here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      image: "/images/image-4.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Information about PDF: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Information about PDF: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: "/images/image-4-s.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
  ],
  title: "Investigations",
};

export default {
  title: "Sections/InvestigationsPreview",
  argTypes: {},
};

function Template(args) {
  return <InvestigationsPreview {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  ...investigations,
};
