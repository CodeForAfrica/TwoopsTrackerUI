import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";

import Section from "@/twoopstracker/components/Section";
import Sort from "@/twoopstracker/components/Sort";
import { contentActionsProps } from "@/twoopstracker/config";
import { tweetsSearchParamsFromSearchQuery } from "@/twoopstracker/lib";
import getQueryString from "@/twoopstracker/utils/getQueryString";

const useStyles = makeStyles(({ palette, typography, breakpoints }) => ({
  root: {},
  section: {},
  actions: {
    marginLeft: typography.pxToRem(-16),
    borderBottom: "1px solid #00000040",
    padding: `${typography.pxToRem(42)} 0`,
    [breakpoints.up("md")]: {
      margin: 0,
      borderBottom: "1px solid #00000040",
      paddingBottom: typography.pxToRem(42),
      paddingTop: typography.pxToRem(72),
    },
    [breakpoints.up("xl")]: {
      margin: 0,
      paddingBottom: typography.pxToRem(47),
      paddingTop: typography.pxToRem(80),
    },
  },
  downloadAction: {
    flexDirection: "column",
    padding: `${typography.pxToRem(18)} 0`,
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  label: {
    padding: `${typography.pxToRem(6)} 0`,
    paddingBottom: typography.pxToRem(28),
  },
  button: {
    color: palette.secondary.main,
    fontSize: typography.body2.fontSize,
    marginLeft: typography.pxToRem(12),
    minWidth: "auto",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  sortAction: {
    flexDirection: "column",
    [breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
}));

const ContentActions = forwardRef(function ContentActions(props, ref) {
  const {
    apiUri,
    className,
    menuItems,
    onChangeSortBy,
    onClickSortOrder,
    queryParams,
    sort,
    type,
  } = props;

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
        tweetsSearchParamsFromSearchQuery(queryParams)?.toString() ?? "";
      fileName = `${type}-${datedQueryString?.replace("?", "-")}`;
    }

    saveAs(blobObject, `${fileName}.${fileExtension}`);
  };
  const isDesc = sort?.startsWith("-");
  const sortBy = sort?.replace(/^-/, "");

  return (
    <div className={clsx(classes.root, className)} ref={ref}>
      <Section className={classes.section}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.actions}
        >
          <Grid
            item
            xs={12}
            md={4}
            container
            className={classes.downloadAction}
          >
            <Grid item>
              <Typography
                align="left"
                component="span"
                variant="body2"
                className={classes.label}
              >
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

          <Grid
            item
            xs={12}
            md={8}
            container
            justifyContent="flex-end"
            className={classes.sortAction}
          >
            <Grid item>
              <Sort
                isDesc={isDesc}
                label="Sort By:"
                name="sort"
                onChangeSortField={onChangeSortBy}
                menuItems={menuItems}
                onClickSortOrder={onClickSortOrder}
                value={sortBy}
              />
            </Grid>
          </Grid>
        </Grid>
      </Section>
    </div>
  );
});

ContentActions.propTypes = {
  apiUri: PropTypes.string,
  className: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onChangeSortBy: PropTypes.func,
  onClickSortOrder: PropTypes.func,
  queryParams: PropTypes.shape({}),
  sort: PropTypes.string,
  type: PropTypes.string,
};

ContentActions.defaultProps = {
  apiUri: undefined,
  className: PropTypes.string,
  menuItems: undefined,
  onChangeSortBy: undefined,
  onClickSortOrder: undefined,
  queryParams: undefined,
  sort: undefined,
  type: undefined,
};

export default ContentActions;
