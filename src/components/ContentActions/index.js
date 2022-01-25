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
    margin: `auto ${typography.pxToRem(12)}`,
    color: palette.secondary.main,
    fontSize: typography.body2.fontSize,
  },
  label: {
    padding: `${typography.pxToRem(6)} 0`,
    display: "inline-flex",
    fontFamily: typography.button.fontFamily,
  },
}));

function ContentActions({ apiUri, queryParams, type, ...props }) {
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
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid container item md={4} alignItems="center">
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
