import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import UserSearchCard from "@/twoopstracker/components/UserSearchCard";

const useStyles = makeStyles(() => ({
  root: {},
}));

function UserSearch({ items, ...props }) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {items?.length ? (
        <Grid container>
          {items.map((item) => (
            <Grid item xs={12}>
              <UserSearchCard {...item} key={item.created_at} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>You have no saved search</Typography>
      )}
    </div>
  );
}

UserSearch.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ created_at: PropTypes.string })),
};

UserSearch.defaultProps = {
  items: undefined,
};

export default UserSearch;
