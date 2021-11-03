import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Filter from "@/twoopstracker/components/Filter";
import Search from "@/twoopstracker/components/Search";
import Section from "@/twoopstracker/components/Section";

const SearchSection = ({ onSearch, handleFilter, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.container}>
          <Search />
          <Filter
            label="Date"
            handleFilter={handleFilter}
            menuItems={[
              { name: "Last 1 Day", value: 1 },
              { name: "Last 3 Days", value: 3 },
              { name: "Last 30 Days", value: 30 },
            ]}
          />
          <Filter
            label="Theme"
            handleFilter={handleFilter}
            menuItems={[
              { name: "Covid-19", value: "Covid-19" },
              { name: "Anti-vaxx", value: "Anti-vaxx" },
              { name: "Foreign Influence", value: "Foreign Influence" },
            ]}
          />
          <Filter
            label="Location"
            handleFilter={handleFilter}
            menuItems={[
              { name: "Russia", value: "Russia" },
              { name: "Jamaica", value: "Jamaica" },
              { name: "Ghana", value: "Ghana" },
            ]}
          />
        </div>
        <div className={classes.buttonSection}>
          <Button className={classes.button} onClick={onSearch}>
            Search
          </Button>
        </div>
      </Section>
    </div>
  );
};

SearchSection.propTypes = {
  onSearch: PropTypes.func,
  handleFilter: PropTypes.func,
};
SearchSection.defaultProps = {
  onSearch: undefined,
  handleFilter: undefined,
};

export default SearchSection;
