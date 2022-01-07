import React from "react";

import Hero from ".";

const home = {
  hero: {
    ctas: {
      search: {
        label: "Use the tool",
        href: "/explore",
      },
      signUp: {
        label: "Sign up",
        href: "/login",
      },
    },
    description: "Let’s keep disinformation agents accountable.",
    title: "Track disinformation actors and trolls!",
    withCTA: true,
  },
  partners: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    items: [
      { image: "/images/artboard-1-2x-1.png", href: "#" },
      { image: "/images/cfa-editable-logo-01-1.png", href: "#" },
    ],
    title: "Partners & About Us",
  },
  signUp: {
    buttonLink: "/signup",
    buttonText: "Sign up",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
    image: "/images/trolltracker-showcase-1.png",
    title: "Get more data today!",
  },
  investigations: {
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
  },
};

export default {
  title: "Sections/Hero",
  argTypes: {},
};

function Template(args) {
  return <Hero {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  ...home.hero,
};
