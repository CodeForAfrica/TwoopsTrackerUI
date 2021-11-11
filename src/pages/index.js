import { subDays } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

import Chart from "@/twoopstracker/components/Chart";
import Page from "@/twoopstracker/components/Page";
import { search } from "@/twoopstracker/lib";

export default function Index({ endDate, startDate, tweets, ...props }) {
  return (
    <Page {...props}>
      <Chart tweets={tweets} startDate={startDate} endDate={endDate} />
    </Page>
  );
}

Index.propTypes = {
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Index.defaultProps = {
  endDate: undefined,
  startDate: undefined,
  tweets: undefined,
};

// TODO(kilemensi): Once search has been moved to the search page, this method
//                  should be turned into getStaticProps
export async function getStaticProps() {
  const tweets = await search({ days: 14 });
  const date = new Date();
  const endDate = date.toISOString().substr(0, 10);
  const startDate = subDays(date, 14).toISOString().substr(0, 10);
  return {
    props: {
      tweets,
      startDate,
      endDate,
    },
    revalidate: 15 * 50, // 15 minutes
  };
}
