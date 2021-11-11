import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import embed from "vega-embed";

import LineScope from "./LineScope";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(30),
    marginBottom: typography.pxToRem(100),
  },
  section: {
    position: "relative",
    padding: typography.pxToRem(30),
    boxShadow: "0 4px 6px 0 #0000000D",
  },
  chart: {
    width: "100%",
  },
}));

function Chart({ tweets, title, startDate, endDate, ...props }) {
  const classes = useStyles(props);
  const chartRef = useRef();
  const [view, setView] = useState(null);

  useEffect(() => {
    async function renderChart() {
      const spec = LineScope(tweets, startDate, endDate);
      if (chartRef?.current) {
        const newView = await embed(chartRef.current, spec, {
          renderer: "canvas",
          actions: false,
        });
        setView(newView);
      }
    }
    if (tweets) {
      renderChart();
    }
  }, [tweets]);

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
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  title: PropTypes.string,
  tweets: PropTypes.arrayOf(PropTypes.shape({})),
};

Chart.defaultProps = {
  endDate: undefined,
  startDate: undefined,
  title: undefined,
  tweets: undefined,
};

export default Chart;
