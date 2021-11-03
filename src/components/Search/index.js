import { InputBase } from "@material-ui/core";
import React from "react";

import useStyles from "./useStyles";

const Search = (props) => {
  const classes = useStyles(props);
  return (
    <InputBase
      placeholder="Search"
      classes={{
        root: classes.root,
        input: classes.input,
      }}
    />
  );
};

export default Search;
