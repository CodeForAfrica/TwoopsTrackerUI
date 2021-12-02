import userAvator from "@/twoopstracker/assets/icons/avator.svg";
import login from "@/twoopstracker/assets/icons/login.svg";
import signup from "@/twoopstracker/assets/icons/signup.svg";
import fb from "@/twoopstracker/assets/icons/white icon fb.svg";
import insta from "@/twoopstracker/assets/icons/white icon insta.svg";
import linkedin from "@/twoopstracker/assets/icons/white icon linkedin.svg";
import twitter from "@/twoopstracker/assets/icons/white icon twitter.svg";
import ancirLogo from "@/twoopstracker/assets/images/ancir-logo.png";
import ancir from "@/twoopstracker/assets/images/ancir.png";
import codeForAll from "@/twoopstracker/assets/images/Artboard 1@2x 1.png";
import codeForAfrica from "@/twoopstracker/assets/images/CFA Editable Logo-01 1.png";
import civicSignal from "@/twoopstracker/assets/images/civic-signal-logo.png";
import dfrlab from "@/twoopstracker/assets/images/dfrlab.png";
import hatebase from "@/twoopstracker/assets/images/hatebase.png";
import mediacloud from "@/twoopstracker/assets/images/mediacloud.png";
import pesacheckLogo from "@/twoopstracker/assets/images/pesacheck-logo.png";
import pesaCheckLab from "@/twoopstracker/assets/images/pesachecklab.png";
import featuredInvestigationImage from "@/twoopstracker/assets/images/Rectangle 34.png";
import investigationImage from "@/twoopstracker/assets/images/Rectangle 35.png";
import trollImage from "@/twoopstracker/assets/images/Trolltracker showcase 1.png";
import navLogo from "@/twoopstracker/assets/logos/navLogo.svg";

export const shareData = (title) => {
  return [
    {
      name: "Twitter",
      props: { title, via: "TrollTracker", related: ["Code4Africa"] },
    },
    {
      name: "LinkedIn",
      props: {
        summary: title,
        source: process.env.NEXT_PUBLIC_APP_URL,
      },
    },
    {
      name: "Facebook",
      props: { quote: title, hashtag: "#TrollTracker" },
    },
    {
      name: "WhatsApp",
      props: {},
    },
  ];
};

export const tweetsCount = [
  {
    date: "2021-10-08",
    count: 243,
  },
  {
    date: "2021-10-09",
    count: 340,
  },
  {
    date: "2021-10-10",
    count: 567,
  },
  {
    date: "2021-10-11",
    count: 80,
  },
  {
    date: "2021-10-12",
    count: 123,
  },
  {
    date: "2021-10-13",
    count: 342,
  },
  {
    date: "2021-10-14",
    count: 0,
  },
];

export const tweets = [
  {
    tweet_id: 52168038000,
    retweet_id: 93686000,
    retweeted_user_screen_name: null,
    created_at: "2021-10-25T14:02:53.844432Z",
    content:
      "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
    number_of_interactions: 134,
    likes_count: 75,
    retweets_count: 36,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-09T08:50:51Z",
    owner: {
      account_id: 19505035000,
      created_at: "2021-10-25T14:01:47.388074Z",
      updated_at: "2021-11-09T08:51:06.192614Z",
      name: "Nadine Dillon",
      screen_name: "Clinton_Whitfield",
      verified: true,
      protected: true,
      location:
        "In sit exercitation molestiae sunt temporibus ut eveniet reprehenderit qui velit qui quam nostrum voluptates in et labore",
      description: "Tempora voluptatem",
      followers_count: 70,
      friends_count: 36,
      favourites_count: 88,
      statuses_count: 22,
      profile_image_url: "https://www.hyn.com.au",
      deleted: false,
    },
  },
  {
    tweet_id: 346599300,
    retweet_id: 346521300,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T11:57:05.111934Z",
    content:
      "On October 30, 1678, Peter Lacy was born. An #Irishman, who joined the #Russian Army, he is considered one of the most successful Russian commanders. In a military career that spanned half a century he participated in 31 campaigns, 18 battles, and 18 sieg",
    number_of_interactions: 37,
    likes_count: 6,
    retweets_count: 8,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-09T08:51:16Z",
    owner: {
      account_id: 991808040,
      created_at: "2021-11-01T11:57:01.451580Z",
      updated_at: "2021-11-01T11:57:01.451597Z",
      name: "Russian_Emb_MKD",
      screen_name: "Russian_Emb_MKD",
      verified: false,
      protected: false,
      location: "Russia",
      description: "Random Description",
      followers_count: 212,
      friends_count: 3144,
      favourites_count: 3213,
      statuses_count: 3213,
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1096380175791607808/0OVjpWb8_normal.png",
      deleted: false,
    },
  },
  {
    tweet_id: 20160258,
    retweet_id: 2118990469440389000,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T12:03:04.752972Z",
    content:
      "Over 2,000 days have passed since Beijing won the bid for the 2022 Winter Olympics. World-class sports venues have sprung up to fulfill China's commitment to host the Winter Games as scheduled. Behind the commitment are the dreams and efforts of many.  ht",
    number_of_interactions: 182,
    likes_count: 27,
    retweets_count: 89,
    replies_count: 66,
    deleted: true,
    deleted_at: "2021-11-09T08:51:27Z",
    owner: {
      account_id: 581418620,
      created_at: "2021-11-01T12:03:01.729607Z",
      updated_at: "2021-11-01T12:03:01.729630Z",
      name: "Hoyt Ashley",
      screen_name: "Hoyt_Ashley",
      verified: false,
      protected: false,
      location: "London",
      description: "Hoyt Ashley",
      followers_count: 60,
      friends_count: 21,
      favourites_count: 44,
      statuses_count: 20,
      profile_image_url: "https://www.gupefuqyhivo.ws",
      deleted: false,
    },
  },
  {
    tweet_id: 52168038000,
    retweet_id: 93686000,
    retweeted_user_screen_name: null,
    created_at: "2021-10-25T14:02:53.844432Z",
    content:
      "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
    number_of_interactions: 134,
    likes_count: 75,
    retweets_count: 36,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-08T08:50:51Z",
    owner: {
      account_id: 19505035000,
      created_at: "2021-10-25T14:01:47.388074Z",
      updated_at: "2021-11-09T08:51:06.192614Z",
      name: "Nadine Dillon",
      screen_name: "Clinton_Whitfield",
      verified: true,
      protected: true,
      location:
        "In sit exercitation molestiae sunt temporibus ut eveniet reprehenderit qui velit qui quam nostrum voluptates in et labore",
      description: "Tempora voluptatem",
      followers_count: 70,
      friends_count: 36,
      favourites_count: 88,
      statuses_count: 22,
      profile_image_url: "https://www.hyn.com.au",
      deleted: false,
    },
  },
  {
    tweet_id: 346599300,
    retweet_id: 346521300,
    retweeted_user_screen_name: null,
    created_at: "2021-11-05T11:57:05.111934Z",
    content:
      "On October 30, 1678, Peter Lacy was born. An #Irishman, who joined the #Russian Army, he is considered one of the most successful Russian commanders. In a military career that spanned half a century he participated in 31 campaigns, 18 battles, and 18 sieg",
    number_of_interactions: 37,
    likes_count: 6,
    retweets_count: 8,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-05T08:51:16Z",
    owner: {
      account_id: 991808040,
      created_at: "2021-11-01T11:57:01.451580Z",
      updated_at: "2021-11-01T11:57:01.451597Z",
      name: "Russian_Emb_MKD",
      screen_name: "Russian_Emb_MKD",
      verified: false,
      protected: false,
      location: "Russia",
      description: "Random Description",
      followers_count: 212,
      friends_count: 3144,
      favourites_count: 3213,
      statuses_count: 3213,
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1096380175791607808/0OVjpWb8_normal.png",
      deleted: false,
    },
  },
  {
    tweet_id: 20160258,
    retweet_id: 2118990469440389000,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T12:03:04.752972Z",
    content:
      "Over 2,000 days have passed since Beijing won the bid for the 2022 Winter Olympics. World-class sports venues have sprung up to fulfill China's commitment to host the Winter Games as scheduled. Behind the commitment are the dreams and efforts of many.  ht",
    number_of_interactions: 182,
    likes_count: 27,
    retweets_count: 89,
    replies_count: 66,
    deleted: true,
    deleted_at: "2021-11-06T08:51:27Z",
    owner: {
      account_id: 581418620,
      created_at: "2021-11-01T12:03:01.729607Z",
      updated_at: "2021-11-01T12:03:01.729630Z",
      name: "Hoyt Ashley",
      screen_name: "Hoyt_Ashley",
      verified: false,
      protected: false,
      location: "London",
      description: "Hoyt Ashley",
      followers_count: 60,
      friends_count: 21,
      favourites_count: 44,
      statuses_count: 20,
      profile_image_url: "https://www.gupefuqyhivo.ws",
      deleted: false,
    },
  },
  {
    tweet_id: 52168038000,
    retweet_id: 93686000,
    retweeted_user_screen_name: null,
    created_at: "2021-10-25T14:02:53.844432Z",
    content:
      "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
    number_of_interactions: 134,
    likes_count: 75,
    retweets_count: 36,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-01T08:50:51Z",
    owner: {
      account_id: 19505035000,
      created_at: "2021-10-25T14:01:47.388074Z",
      updated_at: "2021-11-09T08:51:06.192614Z",
      name: "Nadine Dillon",
      screen_name: "Clinton_Whitfield",
      verified: true,
      protected: true,
      location:
        "In sit exercitation molestiae sunt temporibus ut eveniet reprehenderit qui velit qui quam nostrum voluptates in et labore",
      description: "Tempora voluptatem",
      followers_count: 70,
      friends_count: 36,
      favourites_count: 88,
      statuses_count: 22,
      profile_image_url: "https://www.hyn.com.au",
      deleted: false,
    },
  },
  {
    tweet_id: 346599300,
    retweet_id: 346521300,
    retweeted_user_screen_name: null,
    created_at: "2021-11-02T11:57:05.111934Z",
    content:
      "On October 30, 1678, Peter Lacy was born. An #Irishman, who joined the #Russian Army, he is considered one of the most successful Russian commanders. In a military career that spanned half a century he participated in 31 campaigns, 18 battles, and 18 sieg",
    number_of_interactions: 37,
    likes_count: 6,
    retweets_count: 8,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-02T08:51:16Z",
    owner: {
      account_id: 991808040,
      created_at: "2021-11-01T11:57:01.451580Z",
      updated_at: "2021-11-01T11:57:01.451597Z",
      name: "Russian_Emb_MKD",
      screen_name: "Russian_Emb_MKD",
      verified: false,
      protected: false,
      location: "Russia",
      description: "Random Description",
      followers_count: 212,
      friends_count: 3144,
      favourites_count: 3213,
      statuses_count: 3213,
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1096380175791607808/0OVjpWb8_normal.png",
      deleted: false,
    },
  },
  {
    tweet_id: 20160258,
    retweet_id: 2118990469440389000,
    retweeted_user_screen_name: null,
    created_at: "2021-11-04T12:03:04.752972Z",
    content:
      "Over 2,000 days have passed since Beijing won the bid for the 2022 Winter Olympics. World-class sports venues have sprung up to fulfill China's commitment to host the Winter Games as scheduled. Behind the commitment are the dreams and efforts of many.  ht",
    number_of_interactions: 182,
    likes_count: 27,
    retweets_count: 89,
    replies_count: 66,
    deleted: true,
    deleted_at: "2021-11-04T08:51:27Z",
    owner: {
      account_id: 581418620,
      created_at: "2021-11-01T12:03:01.729607Z",
      updated_at: "2021-11-01T12:03:01.729630Z",
      name: "Hoyt Ashley",
      screen_name: "Hoyt_Ashley",
      verified: false,
      protected: false,
      location: "London",
      description: "Hoyt Ashley",
      followers_count: 60,
      friends_count: 21,
      favourites_count: 44,
      statuses_count: 20,
      profile_image_url: "https://www.gupefuqyhivo.ws",
      deleted: false,
    },
  },
  {
    tweet_id: 52168038000,
    retweet_id: 93686000,
    retweeted_user_screen_name: null,
    created_at: "2021-10-25T14:02:53.844432Z",
    content:
      "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
    number_of_interactions: 134,
    likes_count: 75,
    retweets_count: 36,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-02T08:50:51Z",
    owner: {
      account_id: 19505035000,
      created_at: "2021-10-25T14:01:47.388074Z",
      updated_at: "2021-11-09T08:51:06.192614Z",
      name: "Nadine Dillon",
      screen_name: "Clinton_Whitfield",
      verified: true,
      protected: true,
      location:
        "In sit exercitation molestiae sunt temporibus ut eveniet reprehenderit qui velit qui quam nostrum voluptates in et labore",
      description: "Tempora voluptatem",
      followers_count: 70,
      friends_count: 36,
      favourites_count: 88,
      statuses_count: 22,
      profile_image_url: "https://www.hyn.com.au",
      deleted: false,
    },
  },
  {
    tweet_id: 346599300,
    retweet_id: 346521300,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T11:57:05.111934Z",
    content:
      "On October 30, 1678, Peter Lacy was born. An #Irishman, who joined the #Russian Army, he is considered one of the most successful Russian commanders. In a military career that spanned half a century he participated in 31 campaigns, 18 battles, and 18 sieg",
    number_of_interactions: 37,
    likes_count: 6,
    retweets_count: 8,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-01T08:51:16Z",
    owner: {
      account_id: 991808040,
      created_at: "2021-11-01T11:57:01.451580Z",
      updated_at: "2021-11-01T11:57:01.451597Z",
      name: "Russian_Emb_MKD",
      screen_name: "Russian_Emb_MKD",
      verified: false,
      protected: false,
      location: "Russia",
      description: "Random Description",
      followers_count: 212,
      friends_count: 3144,
      favourites_count: 3213,
      statuses_count: 3213,
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1096380175791607808/0OVjpWb8_normal.png",
      deleted: false,
    },
  },
  {
    tweet_id: 20160258,
    retweet_id: 2118990469440389000,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T12:03:04.752972Z",
    content:
      "Over 2,000 days have passed since Beijing won the bid for the 2022 Winter Olympics. World-class sports venues have sprung up to fulfill China's commitment to host the Winter Games as scheduled. Behind the commitment are the dreams and efforts of many.  ht",
    number_of_interactions: 182,
    likes_count: 27,
    retweets_count: 89,
    replies_count: 66,
    deleted: true,
    deleted_at: "2021-11-07T08:51:27Z",
    owner: {
      account_id: 581418620,
      created_at: "2021-11-01T12:03:01.729607Z",
      updated_at: "2021-11-01T12:03:01.729630Z",
      name: "Hoyt Ashley",
      screen_name: "Hoyt_Ashley",
      verified: false,
      protected: false,
      location: "London",
      description: "Hoyt Ashley",
      followers_count: 60,
      friends_count: 21,
      favourites_count: 44,
      statuses_count: 20,
      profile_image_url: "https://www.gupefuqyhivo.ws",
      deleted: false,
    },
  },
  {
    tweet_id: 52168038000,
    retweet_id: 93686000,
    retweeted_user_screen_name: null,
    created_at: "2021-10-25T14:02:53.844432Z",
    content:
      "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
    number_of_interactions: 134,
    likes_count: 75,
    retweets_count: 36,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-07T08:50:51Z",
    owner: {
      account_id: 19505035000,
      created_at: "2021-10-25T14:01:47.388074Z",
      updated_at: "2021-11-09T08:51:06.192614Z",
      name: "Nadine Dillon",
      screen_name: "Clinton_Whitfield",
      verified: true,
      protected: true,
      location:
        "In sit exercitation molestiae sunt temporibus ut eveniet reprehenderit qui velit qui quam nostrum voluptates in et labore",
      description: "Tempora voluptatem",
      followers_count: 70,
      friends_count: 36,
      favourites_count: 88,
      statuses_count: 22,
      profile_image_url: "https://www.hyn.com.au",
      deleted: false,
    },
  },
  {
    tweet_id: 346599300,
    retweet_id: 346521300,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T11:57:05.111934Z",
    content:
      "On October 30, 1678, Peter Lacy was born. An #Irishman, who joined the #Russian Army, he is considered one of the most successful Russian commanders. In a military career that spanned half a century he participated in 31 campaigns, 18 battles, and 18 sieg",
    number_of_interactions: 37,
    likes_count: 6,
    retweets_count: 8,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-03T08:51:16Z",
    owner: {
      account_id: 991808040,
      created_at: "2021-11-01T11:57:01.451580Z",
      updated_at: "2021-11-01T11:57:01.451597Z",
      name: "Russian_Emb_MKD",
      screen_name: "Russian_Emb_MKD",
      verified: false,
      protected: false,
      location: "Russia",
      description: "Random Description",
      followers_count: 212,
      friends_count: 3144,
      favourites_count: 3213,
      statuses_count: 3213,
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1096380175791607808/0OVjpWb8_normal.png",
      deleted: false,
    },
  },
  {
    tweet_id: 20160258,
    retweet_id: 2118990469440389000,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T12:03:04.752972Z",
    content:
      "Over 2,000 days have passed since Beijing won the bid for the 2022 Winter Olympics. World-class sports venues have sprung up to fulfill China's commitment to host the Winter Games as scheduled. Behind the commitment are the dreams and efforts of many.  ht",
    number_of_interactions: 182,
    likes_count: 27,
    retweets_count: 89,
    replies_count: 66,
    deleted: true,
    deleted_at: "2021-11-09T08:51:27Z",
    owner: {
      account_id: 581418620,
      created_at: "2021-11-01T12:03:01.729607Z",
      updated_at: "2021-11-01T12:03:01.729630Z",
      name: "Hoyt Ashley",
      screen_name: "Hoyt_Ashley",
      verified: false,
      protected: false,
      location: "London",
      description: "Hoyt Ashley",
      followers_count: 60,
      friends_count: 21,
      favourites_count: 44,
      statuses_count: 20,
      profile_image_url: "https://www.gupefuqyhivo.ws",
      deleted: false,
    },
  },
  {
    tweet_id: 52168038000,
    retweet_id: 93686000,
    retweeted_user_screen_name: null,
    created_at: "2021-10-25T14:02:53.844432Z",
    content:
      "@Asmali77 Each Wajir resident has recieved per capita of 495,000 in nine years, while a Tharaka Nithi resident has recieved 81,000/-, a whole Ksh414,000 less than Wajir resident. And you say there is fairness? With this case study, turkana, wajir, mandera",
    number_of_interactions: 134,
    likes_count: 75,
    retweets_count: 36,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-10-30T08:50:51Z",
    owner: {
      account_id: 19505035000,
      created_at: "2021-10-25T14:01:47.388074Z",
      updated_at: "2021-11-09T08:51:06.192614Z",
      name: "Nadine Dillon",
      screen_name: "Clinton_Whitfield",
      verified: true,
      protected: true,
      location:
        "In sit exercitation molestiae sunt temporibus ut eveniet reprehenderit qui velit qui quam nostrum voluptates in et labore",
      description: "Tempora voluptatem",
      followers_count: 70,
      friends_count: 36,
      favourites_count: 88,
      statuses_count: 22,
      profile_image_url: "https://www.hyn.com.au",
      deleted: false,
    },
  },
  {
    tweet_id: 346599300,
    retweet_id: 346521300,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T11:57:05.111934Z",
    content:
      "On October 30, 1678, Peter Lacy was born. An #Irishman, who joined the #Russian Army, he is considered one of the most successful Russian commanders. In a military career that spanned half a century he participated in 31 campaigns, 18 battles, and 18 sieg",
    number_of_interactions: 37,
    likes_count: 6,
    retweets_count: 8,
    replies_count: 23,
    deleted: true,
    deleted_at: "2021-11-06T08:51:16Z",
    owner: {
      account_id: 991808040,
      created_at: "2021-11-01T11:57:01.451580Z",
      updated_at: "2021-11-01T11:57:01.451597Z",
      name: "Russian_Emb_MKD",
      screen_name: "Russian_Emb_MKD",
      verified: false,
      protected: false,
      location: "Russia",
      description: "Random Description",
      followers_count: 212,
      friends_count: 3144,
      favourites_count: 3213,
      statuses_count: 3213,
      profile_image_url:
        "https://pbs.twimg.com/profile_images/1096380175791607808/0OVjpWb8_normal.png",
      deleted: false,
    },
  },
  {
    tweet_id: 20160258,
    retweet_id: 2118990469440389000,
    retweeted_user_screen_name: null,
    created_at: "2021-11-01T12:03:04.752972Z",
    content:
      "Over 2,000 days have passed since Beijing won the bid for the 2022 Winter Olympics. World-class sports venues have sprung up to fulfill China's commitment to host the Winter Games as scheduled. Behind the commitment are the dreams and efforts of many.  ht",
    number_of_interactions: 182,
    likes_count: 27,
    retweets_count: 89,
    replies_count: 66,
    deleted: true,
    deleted_at: "2021-11-02T08:51:27Z",
    owner: {
      account_id: 581418620,
      created_at: "2021-11-01T12:03:01.729607Z",
      updated_at: "2021-11-01T12:03:01.729630Z",
      name: "Hoyt Ashley",
      screen_name: "Hoyt_Ashley",
      verified: false,
      protected: false,
      location: "London",
      description: "Hoyt Ashley",
      followers_count: 60,
      friends_count: 21,
      favourites_count: 44,
      statuses_count: 20,
      profile_image_url: "https://www.gupefuqyhivo.ws",
      deleted: false,
    },
  },
];

export const navigationArgs = {
  menuProps: [
    {
      href: "/explore",
      label: "Watchlists",
    },
    {
      href: "/lexicons",
      label: "Lexicons",
    },
    {
      href: "/investigations",
      label: "Investigations",
    },
    {
      href: "/about",
      label: "About",
    },
  ],
  loginMenuProps: [
    {
      label: "Sign up",
      href: "/login",
      imageProps: {
        width: 24,
        height: 24,
        alt: "desktop logo",
        href: "/login",
        src: signup,
      },
    },
    {
      label: "Log In",
      href: "/login",
      imageProps: {
        width: 24,
        height: 24,
        alt: "desktop logo",
        href: "/login",
        src: login,
      },
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
  userProfileArgs: {
    label: "Account Name",
    logOutLabel: "Log Out",
    src: userAvator,
    alt: "Profile",
    profilePages: [
      {
        href: "/account/lists",
        label: "My Lists",
      },
      {
        href: "/account/searches",
        label: "My Saved Searches",
      },
      {
        href: "/account/data",
        label: "Upload Data",
      },
    ],
    accountLink: [
      {
        href: "/account/settings",
        label: "My Account",
      },
    ],
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
    searchLabel: "Search the Data",
    signUpLink: "/login",
    description: "Let’s keep disinformation agents accountable.",
    signUpLabel: "Sign Up",
    searchLink: "/explore",
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

export const searches = [
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
  {
    name: "Search name",
    created_at: "2021-10-25T14:02:53.844432Z",
    query: {
      term: "Crime",
      location: "Russia",
    },
  },
];
export const about = {
  banner: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus est ac #vestibulum eleifend. Suspendisse eget aliquam lorem nu...",
    title: "About Us",
  },
  items: [
    {
      image: codeForAfrica,
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://www.codeforafrica.org/'>Code for Africa (CfA)</a> is the continent’s largest network of civic technology and data journalism labs, with teams in 21 countries. CfA builds digital democracy solutions that give citizens unfettered access to actionable information that empowers them to make informed decisions, and that strengthens civic engagement for improved public governance and accountability. This includes building infrastructure like the continent’s largest open data portals at openAFRICA and sourceAFRICA. CfA incubates initiatives as diverse as the africanDRONE network, the PesaCheck fact-checking initiative, the sensors.AFRICA air quality sensor network and the research and analysis programme Civic Signal.",
      href: "https://www.codeforafrica.org/",
    },

    {
      image: codeForAll,
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://www.cfa.org/'>Code for All</a> is a global network composed of 30+ civic tech organisations from around the world. Our mission is to connect civic tech organisations so they can learn from each other, leading to greater impact in their local communities. With the support of this international network, each of our member organisations have access to tool-kits, projects, and expertise from people doing similar work in different corners of the world. We believe in driving social change through digital technology, citizen participation and collaborative decision-making, while improving the relationship between governments and citizens.",
      href: "https://www.cfa.org/",
    },
    {
      image: dfrlab,
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://www.cfa.org/'>Code for All</a> is a global network composed of 30+ civic tech organisations from around the world. Our mission is to connect civic tech organisations so they can learn from each other, leading to greater impact in their local communities. With the support of this international network, each of our member organisations have access to tool-kits, projects, and expertise from people doing similar work in different corners of the world. We believe in driving social change through digital technology, citizen participation and collaborative decision-making, while improving the relationship between governments and citizens.",
      href: "https://www.cfa.org/",
    },
    {
      image: ancirLogo,
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://investigate.africa/'>ANCIR’s iLAB</a> provides grantees, collaborators, partners and formalised members with round-the-clock investigative support services. This includes editorial, cross-examination, data, technology, forensics, financial and other services to assist in addressing and resolving investigative queries.",
      href: "https://investigate.africa/",
    },
    {
      image: pesacheckLogo,
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://pesacheck.org/'>PesaCheck</a> is a pioneering verification initiative that is kickstarting fact-checking across Africa. Initially focused on verifying the financial and other statistical numbers quoted by public figures in Kenya, Tanzania and Uganda, PesaCheck is now Africa’s largest with full-time fact-checkers in 12 countries in both east and west Africa, as well as across the Sahel. PesaCheck fact-checks in two international languages (English and French), as well as major African languages such as Kiswahili and Amharic.",
      href: "https://pesacheck.org/",
    },
    {
      image: civicSignal,
      description:
        "<a rel='noopener noreferrer' target='_blank' href='https://civicsignal.africa/'>CivicSignal</a> is the research and analysis programme of Code for Africa, the continent’s largest network of indigenous African civic technology and investigative data journalism laboratories. CivicSignal’s data analysis is powered by MIT’s Media Cloud platform, and research partners include the Reuters Institute for Journalism and the Global Disinformation Index.",
      href: "https://civicsignal.africa/",
    },
  ],
};

export const watchlists = {
  banner: {
    description:
      "Analysing how toxic actors and trolls hide their manipulation",
    title: "Track the trolls & sock-puppets poisoning our democracies",
  },
};

export const lexicons = {
  banner: {
    description:
      "Use these free resources made available by Troll Tracker to aid in your anti-disinformation investigations.",
    title: "Lexicons",
  },
  items: [
    {
      image: ancir,
      description:
        "ANCIR’s iLAB uses open-source investigative techniques to study disinformation narratives to identify indicators of coordinated inauthentic behaviour and disinformation campaigns both from domestic and foreign actors.",
      title: "ANCIR’s ILAB",
      href: "https://investigate.africa/",
    },
    {
      image: mediacloud,
      description:
        "CivicSignal’s MediaCloud is an open-source platform for media analysis. By tracking millions of stories published online, our suite of tools allows researchers to track how stories and ideas spread through media. Our tools are designed to aggregate, analyze, deliver and visualise information, answering complex quantitative and qualitative questions about the content of online media.",
      title: "MediaCloud",
      href: "https://civicsignal.africa/",
    },
    {
      image: hatebase,
      description:
        "Hatebase is a service built to help organizations and online communities detect, monitor and analyze hate speech. The company’s algorithms analyze public conversations using a broad vocabulary based on nationality, ethnicity, religion, gender, sexual orientation, disability and class, with data across 95+ languages and 175+ countries.",
      title: "Hatebase",
      href: "https://hatebase.org/",
    },
    {
      image: pesaCheckLab,
      description:
        "PeaceTech Lab’s series of hate speech Lexicons identify and explain inflammatory language on social media while offering alternative words and phrases that can be used to combat the spread of hate speech in conflict-affected countries. Our Lexicons serve as a pivotal resource for local peacebuilders, social media companies, and organizations working to stop and prevent hate speech worldwide.",
      title: "PeaceTech Lab",
      href: "https://pesacheck.org/",
    },
  ],
  ctaLabel: "View Website",
};

export const pagination = {
  pageSizeDefaultValue: "20",
  pageSizeLabel: "Results on Page",
  pageSizeOptions: [{ value: "20" }, { value: "50" }],
};
export const upload = {
  conjuctionLabel: "or",
  downloadCopy: "Download the template",
  errorLabel: "Something happened, please check the document and try again",
  successLabel: "Upload successful",
  loadingLabel: "Uploading...",
  templateLink: "/template.csv",
  templateName: "template.csv",
  dragLabel: "Drag and drop your CSV files here",
  uploadLabel: "Select a File",
};

export const searchPgination = {
  pageSizeDefaultValue: "3",
  pageSizeLabel: "Results on Page",
  pageSizeOptions: [{ value: "10" }, { value: "20" }],
};

const config = {
  investigation,
  name: "TwoopsTracker",
  navigationArgs,
  searches,
  tweets,
  tweetsCount,
  url: "http://localhost:3000",
};

export default config;
