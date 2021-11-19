import theme from "@/twoopstracker/theme";

export default function LineChartScope(data, startDate, endDate, smallScreen) {
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
    autosize: { type: "fit-x" },
    width: { signal: "width" },
    height: { signal: "height" },
    data: [
      {
        name: "table",
        values: data,
        format: { type: "json", parse: "auto" },
        transform: [
          {
            type: "collect",
            sort: { field: "deleted_at" },
          },
          {
            type: "timeunit",
            field: "deleted_at",
            units: ["date", "month", "year"],
            as: ["formatted_date", "formatted_date0"],
            signal: "tbin",
          },
          {
            type: "aggregate",
            ops: ["count"],
            as: ["count"],
            drop: false,
            groupby: ["formatted_date"],
          },
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
        name: "width",
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
        value: 435,
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
        name: "mainGroup",
        value: "deleted_at",
      },
      {
        name: "chartTitle",
        value: "Activity",
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
        name: "titleFont",
        value: theme.typography.chart.fontFamily,
      },
      {
        name: "titleWeight",
        value: 700,
      },
      {
        name: "titleSize",
        value: 36,
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
      {
        name: "endDate",
        value: endDate,
      },
      {
        name: "startDate",
        value: startDate,
      },
    ],
    scales: [
      {
        name: "xscale",
        type: "point",
        domain: {
          signal:
            "timeSequence('date', datetime(startDate), datetime(endDate))",
        },
        range: [
          0,
          {
            signal: "smallScreen? width: 0.75 * width",
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
        range: [{ signal: "height - 100" }, 0],
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
          field: "formatted_date",
        },
      },
      {
        name: "color-gradient",
        type: "sequential",
        range: ["rgba(219, 17, 17, 0.1)", "rgba(219, 17, 17, 0.6)"],
      },
    ],

    marks: [
      {
        type: "group",
        name: "titleGroup",
        encode: {
          enter: {
            x: { value: 0 },
            y: { value: 0 },
            height: { signal: "smallScreen? '50': '100'" },
            width: { signal: "width" },
          },
        },
        marks: [
          {
            type: "text",
            encode: {
              update: {
                x: { value: 0 },
                y: { value: 0 },
                height: { value: 60 },
                text: { signal: "chartTitle" },
                opacity: { value: 1 },
                font: { signal: "titleFont" },
                fontSize: { signal: "titleSize" },
                fontWeight: { signal: "titleWeight" },
              },
            },
          },
        ],
      },
      {
        type: "group",
        name: "lineGroup",
        encode: {
          update: {
            x: { value: 0 },
            y: { value: 100 },
            height: {
              signal: "height - 100",
            },
            width: {
              signal: "smallScreen? width: 0.75 * width",
            },
          },
        },
        axes: [
          {
            orient: "left",
            scale: "yscale",
            domainOpacity: 0.2,
            tickSize: 0,
            grid: true,
            labelPadding: 6,
            zindex: 1,
            format: { signal: "numberFormat" },
            tickCount: 6,
            tickMinStep: 1,
            encode: {
              grid: {
                update: {
                  x2: { signal: "smallScreen ? width : 0.75 * width" },
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
            name: "line",
            from: { data: "table" },
            type: "line",
            encode: {
              enter: {
                x: { scale: "xscale", field: "formatted_date" },
                stroke: { scale: "color", field: "formatted_date" },
                y: { scale: "yscale", field: "count" },
                strokeWidth: { value: 2 },
                fill: { signal: "gradient('color-gradient', [0, 0], [1, 0]" },
              },
              update: {
                interpolate: { signal: "interpolate" },
                strokeOpacity: { value: 1 },
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
            x: { signal: "smallScreen ? '0' : 0.8 * width" },
            y2: { signal: "smallScreen ? '100': height" },
            height: { signal: "smallScreen? '50': '100'" },
            width: { signal: "smallScreen? width: '100'" },
          },
        },
        marks: [
          {
            type: "text",
            encode: {
              update: {
                x: { value: 0 },
                y: { value: 0 },
                text: { signal: "highlight" },
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
                x2: { signal: "smallScreen? width: '0'" },
                y2: { signal: "smallScreen? '0': '100'" },
                text: { signal: "total" },
                opacity: { value: 1 },
                font: { signal: "totalFont" },
                fontSize: { signal: "totalSize" },
                fontWeight: { signal: "totalWeight" },
              },
            },
          },
        ],
      },
    ],
  };
}
