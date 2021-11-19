import { Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

import Filter from "@/twoopstracker/components/Filter";
import Search from "@/twoopstracker/components/Search";
import Section from "@/twoopstracker/components/Section";

const SearchSection = ({
  days,
  handleSelection,
  location,
  onSearch,
  theme,
  ...props
}) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Search handleSelection={handleSelection} />
          </Grid>
          <Grid
            item
            lg={4}
            md={12}
            sm={12}
            xs={12}
            className={classes.filterSection}
          >
            <Filter
              key={days}
              label="Days"
              handleSelection={handleSelection}
              menuItems={[
                { name: "Last 1 Day", value: "1" },
                { name: "Last 3 Days", value: "3" },
                { name: "Last 7 Days", value: "7" },
                { name: "Last 14 Days", value: "14" },
                { name: "Last 30 Days", value: "30" },
              ]}
              value={days}
            />
            <Filter
              key={theme}
              label="Theme"
              handleSelection={handleSelection}
              menuItems={[
                { name: "Covid-19", value: "Covid-19" },
                { name: "Anti-vaxx", value: "Anti-vaxx" },
                { name: "Foreign Influence", value: "Foreign Influence" },
                { name: "None", value: "" },
              ]}
              value={theme}
            />
            <Filter
              key={location}
              label="Location"
              handleSelection={handleSelection}
              menuItems={[
                { name: "Russia", value: "Russia" },
                { name: "Jamaica", value: "Jamaica" },
                { name: "Ghana", value: "Ghana" },
                { name: "None", value: "" },
              ]}
              value={location}
            />
          </Grid>
        </Grid>
        <div className={classes.buttonSection}>
          <Button className={classes.saveButton} onClick={onSearch}>
            Save Search
          </Button>
          <Button className={classes.button} onClick={onSearch}>
            Search
          </Button>
        </div>
      </Section>
    </div>
  );
};

SearchSection.propTypes = {
  days: PropTypes.string,
  handleSearch: PropTypes.func,
  handleSelection: PropTypes.func,
  location: PropTypes.string,
  onSearch: PropTypes.func,
  theme: PropTypes.string,
};

SearchSection.defaultProps = {
  days: undefined,
  handleSearch: undefined,
  handleSelection: undefined,
  location: undefined,
  onSearch: undefined,
  theme: undefined,
};

export default SearchSection;
