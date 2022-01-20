import theme from "@/twoopstracker/theme";

export default function LineChartScope(data, smallScreen = false) {
  return {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "Line Chart",
    config: {
      axis: {
        gridColor: theme.palette.text.primary,
        gridOpacity: 0.2,
        labelFont: theme.typography.chart.fontFamily,
      },
      range: {
        category: [theme.palette.primary.main],
      },
    },
    autosize: { type: "fit", contains: "padding" },
    padding: 5,
    height: { signal: "height" },
    width: { signal: "breadth" },
    data: [
      {
        name: "table",
        values: data,
        format: {
          type: "json",
          parse: "auto",
        },
        transform: [
          {
            type: "joinaggregate",
            as: ["TotalCount"],
            ops: ["sum"],
            fields: ["count"],
          },
        ],
      },
    ],
    signals: [
      {
        name: "breadth",
        update: "containerSize()[0] ? containerSize()[0] : 800",
        on: [
          {
            events: "window:resize",
            update: "containerSize()[0] ? containerSize()[0] : 800",
          },
        ],
      },
      {
        name: "height",
        value: 457,
      },
      {
        name: "interpolate",
        value: "linear",
      },
      {
        name: "numberFormat",
        value: ",.0f",
      },
      {
        name: "dateFormat",
        value: smallScreen ? "%e/%m" : "%e %b",
      },
      {
        name: "tooltipDateFormat",
        update: "smallScreen? '%e %b %Y' : '%e %B %Y'",
      },
      {
        name: "chartTitle",
        value: "Deleted Tweets Activity",
      },
      {
        name: "source",
        value: "Trolltracker",
      },
      {
        name: "lastUpdated",
        update:
          "timeFormat(data('table')[data('table').length - 1 ]['date'], tooltipDateFormat)",
      },
      {
        name: "chartSubTitle",
        update:
          "'From ' + timeFormat(data('table')[0]['date'], tooltipDateFormat) + ' to ' +  lastUpdated",
      },
      {
        name: "smallScreen",
        value: smallScreen,
      },
      {
        name: "highlight",
        value: smallScreen
          ? "Total deleted tweets"
          : ["Total number of deleted", "tweets"],
      },
      {
        name: "total",
        update: "data('table')[0]['TotalCount']",
      },
      {
        name: "highlightFont",
        value: theme.typography.chart.fontFamily,
      },
      {
        name: "highlightWeight",
        value: 400,
      },
      {
        name: "highlightSize",
        value: smallScreen ? 18 : 24,
      },
      {
        name: "sourceFont",
        value: theme.typography.chart.fontFamily,
      },
      {
        name: "sourceWeight",
        value: 400,
      },
      {
        name: "sourceSize",
        value: smallScreen ? 13 : 18,
      },
      {
        name: "titleFont",
        value: theme.typography.h1.fontFamily,
      },
      {
        name: "titleWeight",
        value: 700,
      },
      {
        name: "titleSize",
        value: smallScreen ? 24 : 36,
      },
      {
        name: "totalFont",
        value: theme.typography.chart.fontFamily,
      },
      {
        name: "totalWeight",
        value: 700,
      },
      {
        name: "totalSize",
        value: smallScreen ? 18 : 36,
      },
    ],
    scales: [
      {
        name: "xscale",
        type: "point",
        domain: {
          data: "table",
          field: "date",
        },
        range: [
          0,
          {
            signal: "smallScreen ? breadth - 20 : 0.7 * breadth",
          },
        ],
      },
      {
        name: "yscale",
        type: "linear",
        domain: {
          data: "table",
          field: "count",
        },
        range: [{ signal: "smallScreen? height - 100 : height" }, 0],
        nice: true,
        zero: true,
        clamp: true,
      },
      {
        name: "color",
        type: "ordinal",
        range: "category",
        domain: {
          data: "table",
          field: "date",
        },
      },
      {
        name: "color-gradient",
        type: "sequential",
        range: ["rgba(219, 17, 17, 0.1)", "rgba(219, 17, 17, 0.6)"],
      },
    ],
    title: {
      text: { signal: "chartTitle" },
      opacity: { value: 1 },
      font: { signal: "titleFont" },
      fontSize: { signal: "titleSize" },
      fontWeight: { signal: "titleWeight" },
      subtitle: { signal: "chartSubTitle" },
      subtitleFont: { signal: "highlightFont" },
      subtitleFontSize: { signal: "highlightSize" },
      subtitleFontWeight: { signal: "highlightWeight" },
      subtitlePadding: 15,
      frame: "bounds",
      anchor: "start",
      offset: { value: smallScreen ? 40 : 80 },
      zindex: 0,
    },

    marks: [
      {
        type: "group",
        name: "lineGroup",
        encode: {
          update: {
            x: { value: 0 },
            width: {
              signal: "smallScreen? breadth : 0.7 * breadth",
            },
            height: { signal: "smallScreen? height - 100 : height" },
            zindex: 1,
          },
        },
        axes: [
          {
            orient: "left",
            scale: "yscale",
            domainOpacity: 0.3,
            domainWidth: 1.5,
            tickSize: 4,
            grid: true,
            zindex: 1,
            format: { signal: "numberFormat" },
            tickCount: 10,
            tickMinStep: 1,
            encode: {
              grid: {
                update: {
                  x2: { signal: "smallScreen ? breadth : 0.7 * breadth" },
                  opacity: { value: 0.2 },
                },
              },
            },
          },
          {
            orient: "bottom",
            scale: "xscale",
            domainOpacity: 0.2,
            format: { signal: "dateFormat" },
            formatType: "time",
            labelOverlap: true,
          },
        ],
        marks: [
          {
            name: "line area",
            from: { data: "table" },
            type: "area",
            encode: {
              enter: {
                x: { scale: "xscale", field: "date" },
                y: { scale: "yscale", field: "count" },
                y2: { scale: "yscale", value: 0 },
                fill: { signal: "gradient('color-gradient', [0, 1], [1, 0])" },
              },
              update: {
                interpolate: { signal: "interpolate" },
                strokeOpacity: { value: 1 },
              },
            },
          },
          {
            name: "line",
            from: { data: "table" },
            type: "line",
            encode: {
              enter: {
                x: { scale: "xscale", field: "date" },
                stroke: { value: theme.palette.primary.main },
                y: { scale: "yscale", field: "count" },
                y2: { scale: "yscale", value: 0 },
                strokeWidth: { value: 2 },
              },
              update: {
                interpolate: { signal: "interpolate" },
                strokeOpacity: { value: 1 },
              },
            },
          },
          {
            name: "line symbol",
            from: { data: "table" },
            type: "symbol",
            encode: {
              enter: {
                x: { scale: "xscale", field: "date" },
                y: { scale: "yscale", field: "count" },
              },
              update: {
                size: { value: 100 },
                stroke: { value: "transparent" },
                tooltip: {
                  signal:
                    "{ 'date': timeFormat(datum.date, tooltipDateFormat), 'count': format(datum.count, numberFormat) + ' tweets'}",
                },
              },
              hover: {
                fill: { value: theme.palette.text.secondary },
                size: { value: 70 },
                stroke: { value: theme.palette.primary.main },
                strokeWidth: { value: 2 },
              },
            },
          },
        ],
      },
      {
        type: "group",
        name: "highlightGroup",
        encode: {
          enter: {
            x: { signal: "smallScreen ? breadth - 255: 0.73 * breadth" },
            y: 0,
            height: { signal: "height" },
            width: { value: 100 },
          },
        },
        marks: [
          {
            type: "text",
            encode: {
              update: {
                x: { value: 0 },
                y: { value: smallScreen ? 285 : 0 },
                text: {
                  signal: "smallScreen? highlight + ' - ' + total : highlight ",
                },
                opacity: { value: 1 },
                font: { signal: "highlightFont" },
                fontSize: { signal: "highlightSize" },
                fontWeight: { signal: "highlightWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              update: {
                x: { value: 0 },
                y: { value: 100 },
                text: { signal: "smallScreen? '' : total " },
                opacity: { value: 1 },
                font: { signal: "totalFont" },
                fontSize: { signal: "totalSize" },
                fontWeight: { signal: "totalWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              update: {
                x: { value: 0 },
                height: { value: smallScreen ? 20 : 27 },
                y: { signal: "smallScreen ? height - 20 : height -30 " },
                text: { signal: "'Source: ' + source" },
                opacity: { value: 1 },
                font: { signal: "sourceFont" },
                fontSize: { signal: "sourceSize" },
                fontWeight: { signal: "sourceWeight" },
              },
            },
          },
          {
            type: "text",
            encode: {
              update: {
                x: { value: 0 },
                height: { value: smallScreen ? 20 : 27 },
                y: { signal: "height" },
                text: { signal: "'Last Updated: ' + lastUpdated" },
                opacity: { value: 1 },
                font: { signal: "sourceFont" },
                fontSize: { signal: "sourceSize" },
                fontWeight: { signal: "sourceWeight" },
              },
            },
          },
        ],
      },
    ],
  };
}
