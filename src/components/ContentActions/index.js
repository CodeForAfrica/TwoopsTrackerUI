import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

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

function ContentActions({ apiUri, queryParams, ...props }) {
  const classes = useStyles(props);
  const { download } = contentActionsProps;

  const onClickDownload = async (e, t) => {
    e.preventDefault();

    const fileType = t.toLowerCase();
    const fileExtension = fileType === "csv" ? "csv" : "xlsx";
    const queryString = getQueryString({ ...queryParams, download: fileType });
    fetch(`${apiUri}?${queryString}`)
      .then((res) => res.text())
      .then((data) => {
        const a = document.createElement("a");
        if (window.URL.createObjectURL) {
          const blobObject = new Blob([data], { type: "text/csv" });
          a.href = window.URL.createObjectURL(blobObject);
        } else {
          // Fallback for older browsers (limited to 2MB on post-2010 Chrome).
          // Load up the data into the URI for "download."
          a.href = `data:text/csv;charset=utf-8,${encodeURIComponent(data)}`;
        }
        a.download = `download.${fileExtension}`;
        a.click();
      });
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography className={classes.label} variant="body2">
              {download.label}
            </Typography>
            {download.fileTypes?.map((type) => (
              <Button
                className={classes.button}
                variant="text"
                onClick={(e) => onClickDownload(e, type)}
              >
                {type}
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
};

ContentActions.defaultProps = {
  apiUri: undefined,
  queryParams: undefined,
};

export default ContentActions;
