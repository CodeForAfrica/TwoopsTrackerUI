import { Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";
import React from "react";

import Section from "@/twoopstracker/components/Section";

const useStyles = makeStyles(({ typography }) => ({
  section: {
    padding: `${typography.pxToRem(48)} 0 0`,
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
    <Section className={classes.section}>
      <Typography variant="h2">
        {label} : {query}
      </Typography>
    </Section>
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
