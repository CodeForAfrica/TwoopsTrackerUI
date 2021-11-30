import { Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Filter from "@/twoopstracker/components/Filter";
import SavedSearchDialog from "@/twoopstracker/components/SavedSearchDialog";
import Search from "@/twoopstracker/components/Search";
import Section from "@/twoopstracker/components/Section";

const SearchSection = ({
  days,
  onSelection,
  location,
  onSaveSearch,
  onSearch,
  theme,
  ...props
}) => {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);

  const handleClickSaveSearch = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSaveSavedSearch = (name) => {
    setOpen(false);
    if (onSaveSearch) {
      onSaveSearch(name);
    }
  };

  const handleKeyDown = (e) => {
    if (onSearch && e.key === "Enter") {
      onSearch(e);
    }
  };

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Search onChange={onSelection} onKeyDown={handleKeyDown} />
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
              handleSelection={onSelection}
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
              handleSelection={onSelection}
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
              handleSelection={onSelection}
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
          <Button
            className={classes.saveButton}
            onClick={handleClickSaveSearch}
          >
            Save Search
          </Button>
          <Button className={classes.button} onClick={onSearch}>
            Search
          </Button>
        </div>
      </Section>
      <SavedSearchDialog
        open={open}
        onClick={handleClickSaveSavedSearch}
        onClose={handleClose}
        varinat="add"
        title="Save Search"
      />
    </div>
  );
};

SearchSection.propTypes = {
  days: PropTypes.string,
  onSelection: PropTypes.func,
  location: PropTypes.string,
  onSaveSearch: PropTypes.func,
  onSearch: PropTypes.func,
  theme: PropTypes.string,
};

SearchSection.defaultProps = {
  days: undefined,
  onSelection: undefined,
  location: undefined,
  onSaveSearch: undefined,
  onSearch: undefined,
  theme: undefined,
};

export default SearchSection;
