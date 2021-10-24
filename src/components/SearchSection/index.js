import React from "react";

import useStyles from "./useStyles";

import Search from "@/twoopstracker/components/Search";
import Section from "@/twoopstracker/components/Section";

const SearchSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Search />
      </Section>
    </div>
  );
};

export default SearchSection;
