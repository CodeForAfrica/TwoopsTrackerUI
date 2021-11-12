import { useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { subDays } from "date-fns";
import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import embed from "vega-embed";

import LineScope from "./LineScope";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ breakpoints, typography }) => ({
  root: {
    marginTop: typography.pxToRem(30),
    marginBottom: typography.pxToRem(30),
    [breakpoints.up("lg")]: {
      marginTop: typography.pxToRem(30),
      marginBottom: typography.pxToRem(100),
    },
  },
  section: {
    position: "relative",
    padding: typography.pxToRem(30),
    boxShadow: "0 4px 6px 0 #0000000D",
    height: typography.pxToRem(523),
  },
  chart: {
    width: "100%",
  },
}));

function Chart({ tweets, title, days, ...props }) {
  const classes = useStyles(props);
  const chartRef = useRef();
  const [view, setView] = useState(null);

  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const date = new Date();
  const endDate = date.toISOString().substr(0, 10);
  const startDate = subDays(date, days + 1)
    .toISOString()
    .substr(0, 10);

  useEffect(() => {
    async function renderChart() {
      const spec = LineScope(tweets, startDate, endDate, isUpLg);
      if (chartRef?.current) {
        const newView = await embed(chartRef.current, spec, {
          renderer: "svg",
          actions: false,
        });
        setView(newView);
      }
    }
    if (tweets) {
      renderChart();
    }
  }, [tweets, isUpLg]);

  useEffect(() => {
    if (title && view) {
      view.signal("chartTitle", title).run();
    }
  }, [view, title]);

  if (!tweets.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section classes={{ root: classes.section }}>
        <div ref={chartRef} className={classes.chart} />
      </Section>
    </div>
  );
}

Chart.propTypes = {
  days: PropTypes.number,
  title: PropTypes.string,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Chart.defaultProps = {
  days: 7,
  title: undefined,
  tweets: undefined,
};

export default Chart;
