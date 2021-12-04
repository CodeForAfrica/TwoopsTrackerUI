import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import XLSX from "xlsx";

import Section from "@/twoopstracker/components/Section";
import { contentActionsProps } from "@/twoopstracker/config";
import getQueryString from "@/twoopstracker/utils/getQueryString";

const useStyles = makeStyles(({ palette, typography }) => ({
  root: {},
  section: {
    borderBottom: "1px solid #00000040",
    paddingBottom: typography.pxToRem(28),
  },
  button: {
    maring: `auto ${typography.pxToRem(12)}`,
    color: palette.secondary.main,
    fontSize: typography.body2.fontSize,
  },
  label: {
    display: "inline-flex",
    fontFamily: typography.button.fontFamily,
  },
}));

function ContentActions({ apiUri, queryParams, type, ...props }) {
  const classes = useStyles(props);
  const { download } = contentActionsProps;

  const onClickDownload = async (e, t) => {
    e.preventDefault();

    const fileType = t.toLowerCase();
    const fileName = fileType === "csv" ? `${type}.csv` : `${type}.xlsx`;
    const queryString = getQueryString({ ...queryParams, download: fileType });
    const res = await fetch(`${apiUri}?${queryString}`);
    const data = await res.text();

    if (fileType === "csv") {
      const a = document.createElement("a");
      if (window.URL.createObjectURL) {
        const blobObject = new Blob([data], { type: "text/csv" });
        a.href = window.URL.createObjectURL(blobObject);
      } else {
        // Fallback for older browsers (limited to 2MB on post-2010 Chrome).
        // Load up the data into the URI for "download."
        a.href = `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`;
      }
      a.download = fileName;
      a.click();
    } else {
      const table = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new(); // make Workbook of Excel
      // add Worksheet to Workbook
      XLSX.utils.book_append_sheet(wb, table, type);
      // export Excel file
      XLSX.writeFile(wb, fileName);
    }
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography className={classes.label} variant="body2">
              {download.label}
            </Typography>
            {download.fileTypes?.map((t) => (
              <Button
                className={classes.button}
                variant="text"
                onClick={(e) => onClickDownload(e, t)}
              >
                {t}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

ContentActions.propTypes = {
  apiUri: PropTypes.string,
  queryParams: PropTypes.shape({}),
  type: PropTypes.string,
};

ContentActions.defaultProps = {
  apiUri: undefined,
  queryParams: undefined,
  type: undefined,
};

export default ContentActions;
