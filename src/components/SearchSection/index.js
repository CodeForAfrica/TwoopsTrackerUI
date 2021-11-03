import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Filter from "@/twoopstracker/components/Filter";
import Search from "@/twoopstracker/components/Search";
import Section from "@/twoopstracker/components/Section";

const SearchSection = ({ onSearch, handleSelection, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.container}>
          <Search handleSelection={handleSelection} />
          <Filter
            label="Date"
            handleSelection={handleSelection}
            menuItems={[
              { name: "Last 1 Day", value: 1 },
              { name: "Last 3 Days", value: 3 },
              { name: "Last 30 Days", value: 30 },
              { name: "None", value: "" },
            ]}
          />
          <Filter
            label="Theme"
            handleSelection={handleSelection}
            menuItems={[
              { name: "Covid-19", value: "Covid-19" },
              { name: "Anti-vaxx", value: "Anti-vaxx" },
              { name: "Foreign Influence", value: "Foreign Influence" },
              { name: "None", value: "" },
            ]}
          />
          <Filter
            label="Location"
            handleSelection={handleSelection}
            menuItems={[
              { name: "Russia", value: "Russia" },
              { name: "Jamaica", value: "Jamaica" },
              { name: "Ghana", value: "Ghana" },
              { name: "None", value: "" },
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
  handleSelection: PropTypes.func,
  handleSearch: PropTypes.func,
};
SearchSection.defaultProps = {
  onSearch: undefined,
  handleSelection: undefined,
  handleSearch: undefined,
};

export default SearchSection;
