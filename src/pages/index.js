import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Hero from "@/twoopstracker/components/Hero";
import InvestigationsPreview from "@/twoopstracker/components/InvestigationsPreview";
import Page from "@/twoopstracker/components/Page";
import Partners from "@/twoopstracker/components/Partners";
import SignUp from "@/twoopstracker/components/SignUp";
import { tweetsInsights } from "@/twoopstracker/lib";
import { home, settings } from "@/twoopstracker/lib/cms";
import site from "@/twoopstracker/utils/site";

function Index({
  about,
  chartUrl,
  ctas,
  days,
  insights,
  investigations,
  tool,
  ...props
}) {
  const { description, title } = props;

  return (
    <Page {...props}>
      <Hero description={description} title={title} ctas={ctas} />
      <Chart data={insights} days={days} url={chartUrl} />
      <SignUp {...tool} />
      <InvestigationsPreview {...investigations} />
      <Partners {...about} />
    </Page>
  );
}

Index.propTypes = {
  about: PropTypes.shape({}),
  chartUrl: PropTypes.string,
  ctas: PropTypes.shape({}),
  days: PropTypes.number,
  description: PropTypes.string,
  insights: PropTypes.arrayOf(PropTypes.shape({})),
  investigations: PropTypes.shape({}),
  title: PropTypes.string,
  tool: PropTypes.shape({}),
};

Index.defaultProps = {
  about: undefined,
  chartUrl: undefined,
  ctas: undefined,
  days: undefined,
  description: undefined,
  insights: undefined,
  investigations: undefined,
  title: undefined,
  tool: undefined,
};

export async function getStaticProps() {
  const days = 14;
  const insights = await tweetsInsights({ days });
  const chartUrl = `${site.environmentUrl}/explore?days=${days}`;

  return {
    props: {
      ...settings(),
      ...home(),
      insights,
      days,
      chartUrl,
    },
    revalidate: 15 * 60, // 15 minutes
  };
}

export default Index;
