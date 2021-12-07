import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {},
  addToList: {
    color: "black",
    display: "flex",
    "&:hover, &:focus, &:focus-within": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "black",
    },
    [breakpoints.up("lg")]: {
      color: "black",
      "&:hover, &:focus, &:focus-within": {
        color: "black",
        backgroundColor: "transparent",
        textDecoration: "none",
      },
    },
  },
  text: {},
}));

function AddToList({ ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Button
        color="default"
        variant="text"
        size="medium"
        classes={{
          root: classes.addToList,
          text: classes.text,
        }}
      >
        <Typography className={classes.list}>Add to List</Typography>
      </Button>
    </div>
  );
}

export default AddToList;
