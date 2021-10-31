import React from "react";

import useStyles from "./useStyles";

import Filter from "@/twoopstracker/components/Filter";
import Search from "@/twoopstracker/components/Search";
import Section from "@/twoopstracker/components/Section";

const SearchSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.container}>
          <Search />
          <Filter label="Dates" />
          <Filter label="Account Type" />
          <Filter label="Theme" />
          <Filter label="Location" />
        </div>
      </Section>
    </div>
  );
};

export default SearchSection;
