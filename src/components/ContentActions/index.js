import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { saveAs } from "file-saver";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

import SortDown from "@/twoopstracker/assets/icons/sort-down.svg";
import SortUp from "@/twoopstracker/assets/icons/sort-up.svg";
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
  large: {
    width: 48,
    height: 48,
  },
  menuLinks: {
    color: "black",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("xl")]: {
      padding: `${typography.pxToRem(7)} ${typography.pxToRem(18)}`,
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
  text: {
    "&::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
    "&:hover::after": {
      content: '""',
      backgroundImage: "none",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      transition: "margin 0.3s ease",
      marginLeft: 0,
      height: 0,
      width: 0,
    },
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
  value,
  show,
  onSelection,
  apiUri,
  queryParams,
  type,
  isDesc,
  toggleIsDesc,
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
            {/* <Sort
              key={show}
              label="Show:"
              handleSelection={onSelection}
              menuItems={[
                { name: "All", value: "all" },
                { name: "Interactions", value: "interactions" },
                { name: "Screen Name", value: "screen_name" },
              ]}
              value={show}
            /> */}

            <Sort
              key={value}
              label="Sort By:"
              name="ordering"
              handleSelection={onSelection}
              menuItems={[
                { name: "Created At", value: "createdAt" },
                { name: "Deleted At", value: "deletedAt" },
                { name: "Owner Screen Name", value: "ownerScreenName" },
              ]}
              value={value}
            />

            <Button
              color="default"
              variant="text"
              size="large"
              onClick={toggleIsDesc}
              classes={{
                root: classes.menuLinks,
                text: classes.text,
              }}
              startIcon={
                <Image
                  layout="fill"
                  src={isDesc ? SortDown : SortUp}
                  className={classes.large}
                />
              }
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
  value: PropTypes.string,
  show: PropTypes.string,
  isDesc: PropTypes.bool,
  toggleIsDesc: PropTypes.bool,
};

ContentActions.defaultProps = {
  apiUri: undefined,
  onSelection: undefined,
  queryParams: undefined,
  type: undefined,
  value: undefined,
  show: undefined,
  isDesc: undefined,
  toggleIsDesc: undefined,
};

export default ContentActions;
