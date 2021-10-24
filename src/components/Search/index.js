import React from "react";

import useStyles from "./useStyles";

const SearchSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Search Section</div>
    </div>
  );
};

export default SearchSection;
