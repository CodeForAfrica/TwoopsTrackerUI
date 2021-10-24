import React from "react";

import Section from "@/twoopstracker/components/Section";
import TweetCard from "@/twoopstracker/components/TweetCard";

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

const Tweets = () => {
  return (
    <Section>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.username} {...tweet} />
      ))}
    </Section>
  );
};

export default Tweets;
