import fb from "@/twoopstracker/assets/icons/white icon fb.svg";
import insta from "@/twoopstracker/assets/icons/white icon insta.svg";
import linkedin from "@/twoopstracker/assets/icons/white icon linkedin.svg";
import twitter from "@/twoopstracker/assets/icons/white icon twitter.svg";
import codeForAll from "@/twoopstracker/assets/images/Artboard 1@2x 1.png";
import codeForAfrica from "@/twoopstracker/assets/images/CFA Editable Logo-01 1.png";
import featuredInvestigationImage from "@/twoopstracker/assets/images/Rectangle 34.png";
import investigationImage from "@/twoopstracker/assets/images/Rectangle 35.png";
import trollImage from "@/twoopstracker/assets/images/Trolltracker showcase 1.png";
import navLogo from "@/twoopstracker/assets/logos/Nav Logo.svg";

const tweets = [
  {
    retweet:
      "<span class='highlight'>Retweet @handle</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
    originalTweet:
      "Original tweet by  <span class='highlight'>Link to original tweet</span>",
    username: "User One",
    handle: "<span class='highlight'>@handle</span> Type of account",
    listDescription: "Add to List",
    posted: "Posted on mm/dd/yyyy at 00:00:00",
    deleted:
      "Deleted after xx minutes <span class='highlight'>about x hours ago</span>",
    interactions: "Number of interactions: xxxx",
  },
  {
    retweet:
      "<span class='highlight'>Retweet @handle</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
    originalTweet:
      "Original tweet by  <span class='highlight'>Link to original tweet</span>",
    username: "User Two",
    handle: "<span class='highlight'>@handle</span> Type of account",
    listDescription: "Add to List",
    posted: "Posted on mm/dd/yyyy at 00:00:00",
    deleted:
      "Deleted after xx minutes <span class='highlight'>about x hours ago</span>",
    interactions: "Number of interactions: xxxx",
  },
  {
    retweet:
      "<span class='highlight'>Retweet @handle</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
    originalTweet:
      "Original tweet by  <span class='highlight'>Link to original tweet</span>",
    username: "User Three",
    handle: "<span class='highlight'>@handle</span> Type of account",
    listDescription: "Add to List",
    posted: "Posted on mm/dd/yyyy at 00:00:00",
    deleted:
      "Deleted after xx minutes <span class='highlight'>about x hours ago</span>",
    interactions: "Number of interactions: xxxx",
  },
];

export const navigationArgs = {
  menuProps: [
    {
      href: "/data",
      label: "Data",
    },
    {
      href: "/investigations",
      label: "Investigations",
    },
    {
      href: "/resources",
      label: "Resources",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/sign-in",
      label: "Sign in",
    },
    {
      href: "/sign-up",
      label: "Sign Up",
    },
  ],
  desktopLogoProps: {
    width: 237,
    height: 55,
    alt: "desktop logo",
    href: "https://codeforafrica.org",
    src: navLogo,
  },
  mobileLogoProps: {
    width: 254,
    height: 40,
    alt: "mobile logo",
    href: "/",
    src: navLogo,
  },
  drawerLogoProps: {
    width: 254,
    height: 40,
    alt: "drawer logo",
    href: "/",
    src: navLogo,
  },
};

export const investigation = {
  banner: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
    title: "Investigations",
  },
  items: [
    {
      image: featuredInvestigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Information about PDF: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Information about PDF: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: investigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: investigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: investigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: investigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: investigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
    {
      image: investigationImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu... ",
      title: "Investigation One",
      href: "https://www.example.com",
    },
  ],
};

export const home = {
  hero: {
    signUpLabel: "Search the Data",
    signUpLink: "/login",
    description: "Let’s keep disinformation agents accountable.",
    searchLabel: "Sign Up",
    searchLink: "/search",
    title: "Track disinformation actors and trolls!",
    withCTA: true,
  },
  partners: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [codeForAll, codeForAfrica],
    title: "Partners & About Us",
  },
  signUp: {
    buttonLink: "/signup",
    buttonText: "Sign up",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ",
    image: trollImage,
    title: "Get more data today!",
  },
  investigation: {
    buttonLink: "/investigations",
    buttonText: "Read all reports here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: investigation.items,
    title: "Investigations",
  },
};
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
      url: insta,
      alt: "Instagram",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: fb,
      alt: "Facebook",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url: twitter,
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url: linkedin,
      alt: "LinkedIn",
    },
  },
];
export const footerArgs = {
  title: "Stay in touch with us",
  description:
    "This site is an openAFRICA project of Code for Africa.\n" +
    "        All content is released under a Creative Commons 4 Attribution Licence. \n" +
    "        Reuse it to help empower your own community.\n" +
    "        The code is available on GitHub and data is available on openAFRICA.\n",
  logoProps: {
    src: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4426.svg",
    alt: "Code for Africa",
    href: "https://codeforafrica.org",
  },
  socialMedia,
  quickLinks: QUICK_LINKS,
  copyrightProps: {
    icon: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/cc.svg",
    copyright: "2021 PesaYetu",
    copyrightUrl: "https://dev.pesayetu.pesacheck.org",
    copyrightVariant: "subtitle1",
  },
  aboutVariant: "subtitle1",
};

const config = {
  tweets,
  navigationArgs,
  url: "http://localhost:3000",
  investigation,
};

export default config;
