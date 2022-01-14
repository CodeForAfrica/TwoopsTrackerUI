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
    url: "https://twitter.com/Code4Africa",
    image: {
      url: "/images/twitter-footer.svg",
      alt: "Twitter",
    },
  },
  {
    url: "https://linkedin.com/codeforafrica",
    image: {
      url: "images/linkedin-footer.svg",
      alt: "LinkedIn",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: "images/facebook-footer.svg",
      alt: "Facebook",
    },
  },
  {
    url: "https://www.instagram.com/code4africa__/",
    image: {
      url: "/images/instagram-footer.svg",
      alt: "Instagram",
    },
  },
];

const footerArgs = {
  project: {
    description:
      "This site is a project of Code for Africa, the continent’s largest network of civic \n" +
      "        technology and data journalism labs. All content is released under a Creative \n" +
      "        Commons 4 Attribution Licence. Reuse it to help empower your own community\n",
    logoProps: {
      src: "/images/group-4426.svg",
      alt: "Code for Africa",
      href: "https://codeforafrica.org",
    },
  },
  contacts: {
    title: "STAY IN TOUCH",
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

function Template({ ...args }) {
  return <Footer {...args} />;
}

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/?path=/story/sections-footer--default",
  },
};

Default.args = {
  ...footerArgs,
};
