import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Hero from "@/twoopstracker/components/Hero";
import InvestigationsPreview from "@/twoopstracker/components/InvestigationsPreview";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";
import SignUp from "@/twoopstracker/components/SignUp";
import { home } from "@/twoopstracker/config";
import { fetchAllResultsWithNext, tweets } from "@/twoopstracker/lib";

export default function Index({ days, tweets: tweetsProp, ...props }) {
  return (
    <Page {...props}>
      <Hero {...home.hero} />
      <Chart tweets={tweetsProp} days={days} />
      <SignUp {...home.signUp} />
      <InvestigationsPreview {...home.investigation} />
      <Partners {...home.partners} />
    </Page>
  );
}

Index.propTypes = {
  days: PropTypes.number,
  tweets: PropTypes.shape({}),
};

Index.defaultProps = {
  days: undefined,
  tweets: undefined,
};

export async function getStaticProps() {
  const days = 14;
  const fetchTweets = async () => tweets({ days, pageSize: 100 });
  const foundTweets = await fetchAllResultsWithNext(fetchTweets);

  return {
    props: {
      tweets: foundTweets,
      days,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}
