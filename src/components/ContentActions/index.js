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
    maring: `auto ${typography.pxToRem(12)}`,
    color: palette.secondary.main,
    fontSize: typography.body2.fontSize,
  },
  label: {
    display: "inline-flex",
    fontFamily: typography.button.fontFamily,
  },
  filterSection: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

function ContentActions({
  location,
  onSelection,
  theme,
  apiUri,
  queryParams,
  type,
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
          style={{ padding: "2rem 0rem" }}
        >
          <Grid item xs={4}>
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

          <Grid item className={classes.filterSection}>
            <Sort
              key={location}
              label="Sort By:"
              handleSelection={onSelection}
              menuItems={[
                { name: "Russia", value: "Russia" },
                { name: "Jamaica", value: "Jamaica" },
                { name: "Ghana", value: "Ghana" },
                { name: "None", value: "" },
              ]}
              value={location}
            />
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
  onSelection: PropTypes.func,
  location: PropTypes.string,
  days: PropTypes.string,
  theme: PropTypes.string,
};

ContentActions.defaultProps = {
  apiUri: undefined,
  onSelection: undefined,
  location: undefined,
  queryParams: undefined,
  type: undefined,
  days: undefined,
  theme: undefined,
};

export default ContentActions;
