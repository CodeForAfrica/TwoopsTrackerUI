import { Typography, Button, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import useStyles from "./useStyles";

const List = ({ listName, createdAt, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{listName}</Typography>
      <Grid container>
        <Grid item xs={8}>
          <Typography>{createdAt}</Typography>
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
  listName: PropTypes.string,
  createdAt: PropTypes.string,
};

List.defaultProps = {
  listName: undefined,
  createdAt: undefined,
};

export default List;
