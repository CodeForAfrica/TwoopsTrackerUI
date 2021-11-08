import { Typography, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const List = ({ name, created_at: createdAt, ...props }) => {
  const classes = useStyles(props);

  const date = new Date(createdAt).toISOString();

  const year = date.substr(0, 10);
  const hours = date.substr(11, 8);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{name}</Typography>
      <Grid container>
        <Grid item xs={8}>
          {createdAt && (
            <Typography>{`Saved on ${year} at ${hours}`}</Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.editButton}>Edit</Button>
          <Button className={classes.deleteButton}>Delete</Button>
        </Grid>
      </Grid>
    </div>
  );
};

List.propTypes = {
  name: PropTypes.string,
  created_at: PropTypes.string,
};

List.defaultProps = {
  name: undefined,
  created_at: undefined,
};

export default List;
