import codeForAll from "@/twoopstracker/assets/images/Artboard 1@2x 1.png";
import codeForAfrica from "@/twoopstracker/assets/images/CFA Editable Logo-01 1.png";
import featuredInvestigationImage from "@/twoopstracker/assets/images/Rectangle 34.png";
import investigationImage from "@/twoopstracker/assets/images/Rectangle 35.png";
import trollImage from "@/twoopstracker/assets/images/Trolltracker showcase 1.png";

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

const config = {
  tweets,
  investigation,
};

export default config;
