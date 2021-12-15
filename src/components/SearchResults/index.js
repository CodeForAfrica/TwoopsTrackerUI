import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    padding: `${typography.pxToRem(48)} ${typography.pxToRem(0)}`,
  },
  searchQuery: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: typography.pxToRem(64),
    lineHeight: "110%",
    fontFamily: typography.h1.fontFamily,
  },
}));

const SearchResults = ({ results, label, ...props }) => {
  const classes = useStyles(props);

  if (!results?.length) {
    return null;
  }
  return (
    <Section className={classes.section}>
      <Typography variant="h2">
        {label} : {results}
      </Typography>
    </Section>
  );
};

SearchResults.propTypes = {
  results: PropTypes.string,
  label: PropTypes.string,
};

SearchResults.defaultProps = {
  results: undefined,
  label: undefined,
};

export default SearchResults;
