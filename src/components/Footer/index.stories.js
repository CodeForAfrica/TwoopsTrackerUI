/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Footer from ".";

const QUICK_LINKS = [
  {
    title: "Resources",
    links: [
      { href: "/about", label: "About the Project" },
      { href: "/privacy", label: "Methodology" },
    ],
  },
  {
    title: "More",
    links: [
      { href: "/join", label: "Join Us" },
      { href: "/legal", label: "Legal" },
    ],
  },
];

const socialMedia = [
  {
    url: "https://www.instagram.com/code4africa__/",
    image: {
      url: "/images/white-icon-insta.svg",
      alt: "Instagram",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: "/images/white-icon-fb.svg",
      alt: "Facebook",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url: "/images/white-icon-twitter.svg",
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url: "/images/white-icon-linkedin.svg",
      alt: "LinkedIn",
    },
  },
];

const footerArgs = {
  project: {
    description:
      "This site is an openAFRICA project of Code for Africa.\n" +
      "        All content is released under a Creative Commons 4 Attribution Licence. \n" +
      "        Reuse it to help empower your own community.\n" +
      "        The code is available on GitHub and data is available on openAFRICA.\n",
    logoProps: {
      src: "/images/group-4426.svg",
      alt: "Code for Africa",
      href: "https://codeforafrica.org",
    },
  },
  contacts: {
    title: "Stay in touch with us",
    socialMedia,
  },
  quickLinks: QUICK_LINKS,
  copyrightProps: {
    icon: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/cc.svg",
    copyright: "2021 PesaYetu",
    copyrightUrl: "https://dev.pesayetu.pesacheck.org",
    copyrightVariant: "subtitle1",
  },
};

export default {
  title: "Sections/Footer",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    socialMedia: {
      control: {
        type: "object",
      },
    },
    quickLinks: {
      control: {
        type: "array",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    aboutVariant: {
      control: {
        type: "select",
      },
      options: ["subtitle1", "body1"],
    },
    copyrightProps: {
      control: {
        type: "object",
      },
    },
    logoProps: {
      control: {
        type: "object",
      },
    },
  },
};

const Template = ({ ...args }) => <Footer {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/sections-footer--default",
  },
};

Default.args = {
  ...footerArgs,
};
