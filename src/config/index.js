import featuredInvestigationImage from "@/twoopstracker/assets/images/Rectangle 34.png";
import investigationImage from "@/twoopstracker/assets/images/Rectangle 35.png";

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

const config = {
  tweets,
  investigation,
};

export default config;
