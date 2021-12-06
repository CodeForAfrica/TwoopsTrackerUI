import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";
import { contentActionsProps } from "@/twoopstracker/config";
import { tweetsSearchParamFromSearchQuery } from "@/twoopstracker/lib";
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

  const onClickDownload = async (e) => {
    e.preventDefault();

    const fileType = e.currentTarget.dataset.fileType?.toLowerCase();
    const queryString = getQueryString({ ...queryParams, download: fileType });
    const res = await fetch(`${apiUri}?${queryString}`);
    const blobObject = await res.blob();

    const datedQueryString =
      tweetsSearchParamFromSearchQuery(queryParams)?.toString() ?? "";
    const fileName =
      fileType === "csv"
        ? `${type}-${datedQueryString?.replace("?", "-")}.csv`
        : `${type}-${datedQueryString?.replace("?", "-")}.xlsx`;

    saveAs(blobObject, fileName);
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
                data-file-type={t}
                onClick={onClickDownload}
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
