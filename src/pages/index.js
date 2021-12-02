import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Hero from "@/twoopstracker/components/Hero";
import InvestigationsPreview from "@/twoopstracker/components/InvestigationsPreview";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";
import SignUp from "@/twoopstracker/components/SignUp";
import { home } from "@/twoopstracker/config";
import { tweetsInsights } from "@/twoopstracker/lib";

function Index({ chartUrl, days, insights, ...props }) {
  return (
    <Page description={home.hero?.description ?? null} {...props}>
      <Hero {...home.hero} />
      <Chart data={insights} days={days} url={chartUrl} />
      <SignUp {...home.signUp} />
      <InvestigationsPreview {...home.investigation} />
      <Partners {...home.partners} />
    </Page>
  );
}

Index.propTypes = {
  chartUrl: PropTypes.string,
  days: PropTypes.number,
  insights: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  chartUrl: undefined,
  days: undefined,
  insights: undefined,
};

export async function getStaticProps() {
  const days = 14;
  const insights = await tweetsInsights({ days });
  const chartUrl = `${process.env.NEXT_PUBLIC_APP_URL}/explore?days=${days}`;

  return {
    props: {
      insights,
      days,
      chartUrl,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Index;
