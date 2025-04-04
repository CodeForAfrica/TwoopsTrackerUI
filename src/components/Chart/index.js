import {
  Typography,
  useMediaQuery,
  useTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import embed from "vega-embed";

import LineScope from "./LineScope";

import Section from "@/twoopstracker/components/Section";
import Share from "@/twoopstracker/components/Share";

const useStyles = makeStyles(({ breakpoints, palette, typography }) => ({
  root: {
    backgroundColor: palette.background.paper,
    paddingTop: typography.pxToRem(60),
    paddingBottom: typography.pxToRem(60),
    [breakpoints.up("md")]: {
      paddingTop: typography.pxToRem(100),
      paddingBottom: typography.pxToRem(100),
    },
  },
  section: {
    position: "relative",
    padding: `${typography.pxToRem(48)} ${typography.pxToRem(
      30
    )} ${typography.pxToRem(74)}`,
    boxShadow: "0 4px 6px 0 #0000000D",
    height: typography.pxToRem(579),
    backgroundColor: palette.background.default,
  },
  chart: {
    width: "100%",
  },
  tooltip: {
    padding: `${typography.pxToRem(5)} ${typography.pxToRem(10)}`,
    backgroundColor: palette.background.default,
    border: "0.5px solid #0000001A",
    boxShadow: "0px 2px 4px 1px #00000033",
  },
  date: {
    fontSize: typography.pxToRem(13),
    lineHeight: typography.pxToRem(18),
  },
  count: {
    fontSize: typography.pxToRem(14),
    fontWeight: 550,
    fontFamily: typography.body1.fontFamily,
    lineHeight: typography.pxToRem(20),
  },
  share: {
    position: "absolute",
    right: 30,
    zIndex: 1000,
  },
}));

function Chart({ className, data, ...props }) {
  const classes = useStyles(props);
  const chartRef = useRef();
  const [title, setTitle] = useState("");

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  const calculateTooltipPosition = (event, tooltipBox, offsetX, offsetY) => {
    let x = event.pageX + offsetX;
    if (x + tooltipBox.width > window.innerWidth) {
      x = +event.pageX - offsetX - tooltipBox.width;
    }
    let y = event.pageY + offsetY;
    if (y < window.innerHeight) {
      y = window.innerHeight + offsetY;
    }
    if (y + tooltipBox.height > window.innerHeight) {
      y = +event.pageY - offsetY - tooltipBox.height;
    }
    return { x, y };
  };

  const handler = useCallback(
    (_, event, item, value) => {
      const tooltipClass = `charttooltip`;
      let el = document.getElementsByClassName(tooltipClass)[0];
      if (!el) {
        el = document.createElement("div");
        el.classList.add(tooltipClass);
        document.body.appendChild(el);
      }

      const tooltipContainer = document.fullscreenElement || document.body;
      tooltipContainer.appendChild(el);
      // hide tooltip for null objects, undefined
      if (!value) {
        el.remove();
        return;
      }
      el.innerHTML = ReactDOMServer.renderToString(
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <div className={classes.tooltip}>
              <Typography className={classes.date}>{value?.date}</Typography>
              <Typography className={classes.count}>{value?.count}</Typography>
            </div>
          </ThemeProvider>
        </StyledEngineProvider>
      );

      el.classList.add("visible");
      const { x, y } = calculateTooltipPosition(
        event,
        el.getBoundingClientRect(),
        0,
        10
      );
      el.setAttribute(
        "style",
        `top: ${y}px; left: ${x}px; z-index: 1230; position: absolute`
      );
    },
    [classes.count, classes.date, classes.tooltip, theme]
  );

  useEffect(() => {
    async function renderChart() {
      const spec = LineScope(data, !isUpMd, isMd);
      if (chartRef?.current) {
        const view = await embed(chartRef.current, spec, {
          renderer: "svg",
          actions: false,
          tooltip: handler,
        });

        if (view) {
          const titleSignal = view.view?.signal("chartTitle");
          const subtitleSignal = view.view?.signal("chartSubTitle");
          setTitle(`${titleSignal} ${subtitleSignal}`);
        }
      }
    }
    if (data) {
      renderChart();
    }
  }, [data, handler, isMd, isUpMd]);

  if (!data?.length) {
    return null;
  }
  return (
    <div className={clsx(classes.root, className)}>
      <Section classes={{ root: classes.section }}>
        <Share {...props} classes={{ root: classes.share }} title={title} />
        <div ref={chartRef} className={classes.chart} />
      </Section>
    </div>
  );
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  className: PropTypes.string,
};

Chart.defaultProps = {
  data: undefined,
  className: undefined,
};

export default Chart;
