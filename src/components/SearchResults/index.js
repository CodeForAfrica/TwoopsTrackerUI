import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  section: {},
  searchQuery: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "64px",
    lineHeight: "110%",
    fontFamily: typography.h1.fontFamily,
  },
}));

const SearchResults = ({ results, ...props }) => {
  const classes = useStyles(props);

  if (!results?.length) {
    return null;
  }
  return (
    <Section className={classes.section}>
      <Typography variant="body1" className={classes.searchQuery}>
        Search results: {results}
      </Typography>
    </Section>
  );
};

SearchResults.propTypes = {
  results: PropTypes.string,
};

SearchResults.defaultProps = {
  results: undefined,
};

export default SearchResults;
