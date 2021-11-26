/* eslint-disable import/no-anonymous-default-export */
import site from "@/twoopstracker/utils/site";

export default {
  titleTemplate: `%s | ${site.name}`,
  defaultTitle: site.name,
  description: "Explore the tweets they didn't want you to see",
  openGraph: {
    type: "website",
    url: site.url,
    locale: "en",
    site_name: site.name,
    images: [
      {
        /* eslint-disable global-require */
        url: "",
        width: 994,
        height: 511,
        alt: "twoopstracker",
      },
    ],
  },
  twitter: {
    handle: "@TwoopsTracker",
    site: "@TwoopsTracker",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "minimum-scale=1, initial-scale=1, width=device-width",
    },
  ],
};
