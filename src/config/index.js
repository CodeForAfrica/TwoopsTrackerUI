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
      href: "/investigation",
      label: "Investigation",
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
    href: "https://codeforafrica.org",
    src: navLogo,
  },
  drawerLogoProps: {
    width: 254,
    height: 40,
    alt: "drawer logo",
    href: "https://codeforafrica.org",
    src: navLogo,
  },
};

const config = {
  tweets,
  navigationArgs,
  url: "http://localhost:3000",
};

export default config;
