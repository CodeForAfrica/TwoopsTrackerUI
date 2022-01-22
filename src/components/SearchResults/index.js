import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography, palette }) => ({
  root: {
    backgroundColor: palette.background.paper,
  },
  section: {
    padding: `${typography.pxToRem(48)} ${typography.pxToRem(0)} 0 0`,
  },
  searchQuery: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: typography.pxToRem(64),
    lineHeight: "110%",
    fontFamily: typography.h2.fontFamily,
  },
}));

function SearchResults({ query, label, ...props }) {
  const classes = useStyles(props);

  if (!query?.length) {
    return null;
  }
  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Typography variant="h2">
          {label} : {query}
        </Typography>
      </Section>
    </div>
  );
}

SearchResults.propTypes = {
  query: PropTypes.string,
  label: PropTypes.string,
};

SearchResults.defaultProps = {
  query: undefined,
  label: undefined,
};

export default SearchResults;
