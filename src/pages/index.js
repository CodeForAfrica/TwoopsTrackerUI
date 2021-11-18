import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Hero from "@/twoopstracker/components/Hero";
import InvestigationsPreview from "@/twoopstracker/components/InvestigationsPreview";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";
import SignUp from "@/twoopstracker/components/SignUp";
import { home } from "@/twoopstracker/config";
import { tweets } from "@/twoopstracker/lib";

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
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  days: undefined,
  tweets: undefined,
};

export async function getStaticProps() {
  const days = 14;
  const { allTweets } = await tweets({ days });

  return {
    props: {
      tweets: allTweets,
      days,
    },
    revalidate: 15 * 50, // 15 minutes
  };
}
