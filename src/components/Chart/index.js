import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import embed from "vega-embed";

import LineScope from "./LineScope";

const useStyles = makeStyles(({ typography }) => ({
  root: {
    position: "relative",
    width: "100%",
    padding: typography.pxToRem(30),
    boxShadow: "4px 4px 6px 0px #0000000D",
  },
  chart: {
    width: "100%",
  },
}));

function Chart({ data, title, ...props }) {
  const classes = useStyles(props);
  const chartRef = useRef();
  const [view, setView] = useState(null);

  useEffect(() => {
    async function renderChart() {
      const spec = LineScope(data);
      if (chartRef?.current) {
        const newView = await embed(chartRef.current, spec, {
          renderer: "canvas",
          actions: true,
        });
        setView(newView);
      }
    }
    if (data) {
      renderChart();
    }
  }, [data]);

  useEffect(() => {
    if (title && view) {
      view.signal("chartTitle", title).run();
    }
  }, [view, title]);

  if (!data) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div ref={chartRef} className={classes.chart} />
    </div>
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};

Chart.defaultProps = {
  data: undefined,
  title: undefined,
};

export default Chart;
