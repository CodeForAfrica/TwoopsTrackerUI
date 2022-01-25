import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";
import Sort from "@/twoopstracker/components/Sort";
import { contentActionsProps } from "@/twoopstracker/config";
import { tweetsSearchParamFromSearchQuery } from "@/twoopstracker/lib";
import getQueryString from "@/twoopstracker/utils/getQueryString";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {},
  section: {
    borderBottom: "1px solid #00000040",
    paddingBottom: typography.pxToRem(28),
  },
  button: {
    margin: `auto ${typography.pxToRem(12)}`,
    color: palette.secondary.main,
    fontSize: typography.body2.fontSize,
  },
  label: {
    padding: `${typography.pxToRem(6)} 0`,
    display: "inline-flex",
    fontFamily: typography.button.fontFamily,
  },
  sortSection: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  resultsOptions: {
    padding: `${typography.pxToRem(32)} 0`,
  },
}));

function ContentActions({
  value,
  show,
  isDesc,
  onChangeSortField,
  apiUri,
  queryParams,
  type,
  onClickSortOrder,
  ...props
}) {
  const classes = useStyles(props);
  const { download } = contentActionsProps;

  const onClickDownload = async (e) => {
    e.preventDefault();

    const fileExtension = e.currentTarget.dataset.fileExtension?.toLowerCase();
    const queryString = getQueryString({
      ...queryParams,
      download: fileExtension,
    });
    const res = await fetch(`${apiUri}?${queryString}`);
    const blobObject = await res.blob();

    let fileName = type;
    if (type === "tweets") {
      const datedQueryString =
        tweetsSearchParamFromSearchQuery(queryParams)?.toString() ?? "";
      fileName = `${type}-${datedQueryString?.replace("?", "-")}`;
    }

    saveAs(blobObject, `${fileName}.${fileExtension}`);
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.resultsOptions}
        >
          <Grid item xs={9}>
            <Typography className={classes.label} variant="body2">
              {download.label}
            </Typography>
            {download.fileTypes?.map(({ name, ext }) => (
              <Button
                className={classes.button}
                variant="text"
                data-file-extension={ext}
                onClick={onClickDownload}
                key={ext}
              >
                {name}
              </Button>
            ))}
          </Grid>

          <Grid item xs={3} container className={classes.sortSection}>
            <Sort
              key={value}
              isDesc={isDesc}
              label="Sort By:"
              name="ordering"
              onChangeSortField={onChangeSortField}
              menuItems={[
                { name: "Created At", value: "created_at" },
                { name: "Deleted At", value: "deleted_at" },
                { name: "Owner Screen Name", value: "owner__screen_name" },
              ]}
              onClickSortOrder={onClickSortOrder}
              value={value}
            />
          </Grid>
        </Grid>
      </Section>
    </div>
  );
}

ContentActions.propTypes = {
  apiUri: PropTypes.string,
  isDesc: PropTypes.bool,
  queryParams: PropTypes.shape({}),
  type: PropTypes.string,
  onChangeSortField: PropTypes.func,
  value: PropTypes.string,
  show: PropTypes.string,
  onClickSortOrder: PropTypes.func,
};

ContentActions.defaultProps = {
  apiUri: undefined,
  isDesc: undefined,
  onChangeSortField: undefined,
  queryParams: undefined,
  type: undefined,
  value: undefined,
  show: undefined,
  onClickSortOrder: undefined,
};

export default ContentActions;
