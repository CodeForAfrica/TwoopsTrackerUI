import { Button, Grid, Hidden } from "@material-ui/core";
import { useSession } from "next-auth/react";
import PropTypes from "prop-types";
import React, { useState } from "react";

import useStyles from "./useStyles";

import Filter from "@/twoopstracker/components/Filter";
import Link from "@/twoopstracker/components/Link";
import SavedSearchDialog from "@/twoopstracker/components/SavedSearchDialog";
import Search from "@/twoopstracker/components/Search";
import SearchGuide from "@/twoopstracker/components/SearchGuide";
import Section from "@/twoopstracker/components/Section";

function SearchSection({
  category,
  days,
  location,
  onSaveSearch,
  onSelection,
  onSearch,
  query,
  theme,
  twitterAccountsLabel,
  searchLabel,
  loadSearchLabel,
  saveSearchLabel,
  searchGuide: searchGuideProp,
  ...props
}) {
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

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
          <Grid item md={7} xs={12} className={classes.inputSection}>
            <Search
              defaultValue={query || undefined}
              onChange={onSelection}
              onKeyDown={handleKeyDown}
            />
            <Hidden mdUp implementation="css">
              <SearchGuide
                {...searchGuideProp}
                placement="bottom"
                classes={{ root: classes.help }}
              />
            </Hidden>
          </Grid>
          <Grid item md={5} xs={12} className={classes.filterSection}>
            <Filter
              label="Days"
              handleSelection={onSelection}
              menuItems={[
                { name: "Last 1 Day", value: "1" },
                { name: "Last 3 Days", value: "3" },
                { name: "Last 7 Days", value: "7" },
                { name: "Last 14 Days", value: "14" },
                { name: "Last 30 Days", value: "30" },
                { name: "Last 90 Days", value: "90" },
              ]}
              value={days}
            />
            <Filter
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
              label="Category"
              handleSelection={onSelection}
              menuItems={[
                {
                  name: "Disinformation actors",
                  value: "Disinformation actors",
                },
                { name: "Troll Accounts", value: "troll accounts" },
                {
                  name: "Foreign Influence Actors",
                  value: "foreign influence actors",
                },
                { name: "None", value: "" },
              ]}
              value={category}
            />
            <Filter
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
            <Hidden smDown implementation="css">
              <SearchGuide
                {...searchGuideProp}
                placement="top-end"
                classes={{ root: classes.help }}
              />
            </Hidden>
          </Grid>
        </Grid>
        <div className={classes.buttonSection}>
          <Button
            variant="outlined"
            className={classes.saveButton}
            href="/explore/accounts"
            component={Link}
            underline="none"
          >
            {twitterAccountsLabel}
          </Button>
          <div>
            {session ? (
              <>
                <Button
                  variant="outlined"
                  className={classes.saveButton}
                  href="/account/searches"
                  component={Link}
                  underline="none"
                >
                  {loadSearchLabel}
                </Button>
                <Button
                  variant="outlined"
                  className={classes.saveButton}
                  onClick={handleClickSaveSearch}
                >
                  {saveSearchLabel}
                </Button>
              </>
            ) : null}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onSearch}
            >
              {searchLabel}
            </Button>
          </div>
        </div>
      </Section>

      <SavedSearchDialog
        open={open}
        saveLabel="Save"
        cancelLabel="Cancel"
        title="Save Search"
        onClick={handleClickSaveSavedSearch}
        onClose={handleClose}
        variant="add"
      />
    </div>
  );
}

SearchSection.propTypes = {
  category: PropTypes.string,
  days: PropTypes.string,
  twitterAccountsLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  loadSearchLabel: PropTypes.string,
  saveSearchLabel: PropTypes.string,
  location: PropTypes.string,
  onSaveSearch: PropTypes.func,
  onSelection: PropTypes.func,
  onSearch: PropTypes.func,
  query: PropTypes.string,
  theme: PropTypes.string,
  searchGuide: PropTypes.shape({}),
};

SearchSection.defaultProps = {
  category: undefined,
  days: undefined,
  twitterAccountsLabel: undefined,
  searchLabel: undefined,
  loadSearchLabel: undefined,
  saveSearchLabel: undefined,
  location: undefined,
  onSelection: undefined,
  onSaveSearch: undefined,
  onSearch: undefined,
  query: undefined,
  theme: undefined,
  searchGuide: undefined,
};

export default SearchSection;
